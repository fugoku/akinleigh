import { Suspense } from "react";
import Bubble from "./bubble";

export default function Beroll() {
  return (
    <>
      <div className="h-screen relative ">
        <section >
          <article>
            <h1>Managed cloud services</h1>
          </article>
        </section>

        <section className="absolute ">
          <Suspense fallback="null">
            <Bubble />
          </Suspense>
        </section>
      </div>
    </>
  );
}
