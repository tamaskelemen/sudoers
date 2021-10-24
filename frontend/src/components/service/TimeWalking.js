import {send} from "./BorderlessAccountService";

export const TimeWalking = (source, target, amount) => {
    return send(source, target, amount);
}
