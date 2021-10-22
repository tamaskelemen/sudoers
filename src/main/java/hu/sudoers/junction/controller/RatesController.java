package hu.sudoers.junction.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
public class RatesController {

    @RequestMapping(value = "/rates", produces = "application/json")
    @ResponseBody
    public String list(@RequestParam(name = "source") String source, @RequestParam(name = "target") String target) {

        return "Source: " + source + ", target: " + target;
    }

}
