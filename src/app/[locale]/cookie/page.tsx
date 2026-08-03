import { createLegalRoute } from "@/lib/legal-route";

const route = createLegalRoute("cookie");

export const generateMetadata = route.generateMetadata;
export default route.Page;
