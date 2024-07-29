import { SEO } from "../../utils/seo";
import { WorkWithUs } from "../4-library/work-with-us";

export function Home() {
  return (
    <>
        <SEO title="Home Page" description="This is the home page" href="/" />

        <div>Home</div>

        <WorkWithUs />
    </>
  )
}
