import { useRef } from "react";

const useCustomEffect = (effect, dependency) => {
  const isFirstRender = useRef(true);
  const prevDependency = useRef([]);

  if (isFirstRender.current) {
    effect();
    isFirstRender.current = false;
    return;
  }

  let depsChanged = dependency
    ? JSON.stringify(dependency) !== JSON.stringify(prevDependency.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function" && dependency) {
      cleanup();
    }
  }

  prevDependency.current = dependency || [];
};

export default useCustomEffect;
