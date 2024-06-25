import { useEffect } from "react";

export default function Confirmation({ timeout, stopper }) {
  useEffect(() => {
    setTimeout(() => stopper(), timeout);
  }, [timeout, stopper]);

  return (
    <div>
      <h1>Vote done</h1>
    </div>
  );
}