import { ImageUrlContext } from "@/components/Uploader";
import { PdfData } from "./PdfData";
import { useContext } from "react";

export function ChatbotPrompt() {
  const context = useContext(ImageUrlContext)!;
  const { imageUrl } = context;

  const pdfDataText = async () => {
    await PdfData(imageUrl!);
  };

  const prompt = `You are a helpful user support chatbot embedded on a student studying service website. You are able to answer questions
    about a pdf that the user submits to you. You are able to provide study questions about the user's submitted pdf. 

    Use this pdf that the user submits: ${pdfDataText} 

    Only include responses pertaining to the users submitted pdf. 

    Refuse any answer, message, or response that does not have to do with the user's submitted pdf or its content.
    Provide meaningful, detailed, and well thought-out responses that will allow the student to better understand the topics included within their submitted pdf.
`;

  return prompt;
}
