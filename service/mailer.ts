import { contactSchema } from "@/model/contact";

type ContactSubmissionResult =
    | { success: true; message: string }
    | { success: false; errors: string[] };

export async function handleContactSubmission(
    data: unknown
): Promise<ContactSubmissionResult> {
    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.issues.map((issue) => issue.message),
        };
    }

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validation.data),
        });

        if (response.ok) {
            return { success: true, message: "Message sent successfully." };
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        return {
            success: false,
            errors: [(error as Error).message]
        };
    }
}
