import { Suspense } from "react";
import Bubble from "./bubble";


export default function Beroll() {
    return (
        <div className="h-screen">
            <Suspense fallback="null">
              <Bubble/>
          </Suspense>
      </div>
    )
}