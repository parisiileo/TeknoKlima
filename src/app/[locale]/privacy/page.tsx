import { createLegalRoute } from "@/lib/legal-route";

const route = createLegalRoute("privacy");

export const generateMetadata = route.generateMetadata;
export default route.Page;
