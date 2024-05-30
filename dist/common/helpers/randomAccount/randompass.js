import { generate } from "generate-password-ts";
export class generateRandomPassword {
    static generateRandPass() {
        return generate({
            length: 10,
            numbers: true,
        });
    }
    ;
}
;
