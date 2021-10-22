package hu.sudoers.junction.controller;

import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.protobuf.ByteString;
import lombok.SneakyThrows;
import lombok.val;
import org.apache.commons.codec.binary.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

@RequestMapping("api/vision")
@RestController
public class VisionController {

    @PostMapping
    @SneakyThrows
    public Double test(@RequestPart MultipartFile file) {
        List<AnnotateImageRequest> requests = new ArrayList<>();

        ByteString imgBytes = ByteString.readFrom(new BufferedInputStream(file.getInputStream()));

        Image img = Image.newBuilder().setContent(imgBytes).build();
        Feature feat = Feature.newBuilder().setType(Feature.Type.TEXT_DETECTION).build();
        AnnotateImageRequest request =
                AnnotateImageRequest.newBuilder().addFeatures(feat).setImage(img).build();
        requests.add(request);

        // Initialize client that will be used to send requests. This client only needs to be created
        // once, and can be reused for multiple requests. After completing all of your requests, call
        // the "close" method on the client to safely clean up any remaining background resources.
        try (ImageAnnotatorClient client = ImageAnnotatorClient.create()) {
            BatchAnnotateImagesResponse response = client.batchAnnotateImages(requests);
            List<AnnotateImageResponse> responses = response.getResponsesList();

            for (AnnotateImageResponse res : responses) {
                if (res.hasError()) {
                    System.out.format("Error: %s%n", res.getError().getMessage());
                }

                for (int i = 0; i <res.getTextAnnotationsCount(); i++) {
                    val annotation = res.getTextAnnotationsList().get(i);
                    if (annotation.getDescription().matches(".*\\d.*")) {
                        if (Pattern.compile(Pattern.quote("ft"), Pattern.CASE_INSENSITIVE)
                                .matcher(annotation.getDescription())
                                .find()
                                ||
                                Pattern.compile(Pattern.quote("ft"), Pattern.CASE_INSENSITIVE)
                                .matcher(res.getTextAnnotationsList().get(i + 1).getDescription())
                                .find()) {
                            double value = Double.parseDouble(annotation.getDescription().replaceAll("\\D+",""));
                            return value / 350L;
                        }
                    }
                }

                // For full list of available annotations, see http://g.co/cloud/vision/docs
                for (EntityAnnotation annotation : res.getTextAnnotationsList()) {
                    System.out.format("Text: %s%n", annotation.getDescription());
                }
            }
        }
        return null;
    }
}
