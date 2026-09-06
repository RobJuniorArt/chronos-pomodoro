import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage((e) => {
      const countDownSeconds = e.data;
      console.log("Contador:", countDownSeconds);

      if (countDownSeconds <= 0) {
        console.log("Worker COMPLETED");
        worker.terminate();
      }
    });

    if (!state.activeTask) {
      worker.terminate();
      return;
    }

    worker.postMessage(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
