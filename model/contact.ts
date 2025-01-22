import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
        .string()
        .email("Invalid email")
        .refine((email) => {
            const allowedDomains = [
                ".com", ".org", ".net", ".edu", ".gov", ".io", ".co", ".info",
                ".biz", ".me", ".us", ".uk", ".ca", ".de", ".fr", ".au", ".ru",
                ".jp", ".cn", ".in", ".br", ".es", ".it", ".nl", ".se", ".no"
            ];
            return allowedDomains.some((domain) => email.endsWith(domain));
        }, "Email domain is not allowed. Please use a valid domain.")
        .refine((email) => {
            const invalidPatterns = ['test', 'random', 'dummy', 'example', 'placeholder'];
            return !invalidPatterns.some((pattern) => email.toLowerCase().includes(pattern));
        }, "Email username is not allowed. Please use a valid email address."),
    message: z.string().min(7, "Message must be at least 7 characters").nonempty("Message is required"),
});
