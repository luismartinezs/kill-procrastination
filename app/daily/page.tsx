"use client";

import { useState, useEffect } from "react";
import { Input } from "@/common/components/input";
import { Select } from "@/common/components/select";
import { Textarea } from "@/common/components/textarea";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Section } from "@/common/components/section";
import { Spinner } from "@/common/components/spinner";

export default function DailyPage() {
  const [majorGoals, setMajorGoals] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dailyInputs, setDailyInputs] = useState({
    achievement: "",
    alignedGoal: "",
    focusTask: "",
    focusTime: "",
    neededInputs: "",
  });
  const [newGoal, setNewGoal] = useState("");

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("majorGoals") || "[]");
    setMajorGoals(storedGoals);
    const storedInputs = JSON.parse(
      localStorage.getItem("dailyInputs") || "{}"
    );
    setDailyInputs(storedInputs);
    setIsLoading(false);
  }, []);

  const saveMajorGoals = (goals: string[]) => {
    localStorage.setItem("majorGoals", JSON.stringify(goals));
    setMajorGoals(goals);
  };

  const saveDailyInputs = (inputs: typeof dailyInputs) => {
    localStorage.setItem("dailyInputs", JSON.stringify(inputs));
    setDailyInputs(inputs);
  };

  const addMajorGoal = () => {
    if (majorGoals.length < 3 && newGoal.trim()) {
      saveMajorGoals([...majorGoals, newGoal.trim()]);
      setNewGoal("");
    }
  };

  const deleteMajorGoal = (index: number) => {
    const updatedGoals = majorGoals.filter((_, i) => i !== index);
    saveMajorGoals(updatedGoals);
  };

  const resetDailyInputs = () => {
    const emptyInputs = {
      achievement: "",
      alignedGoal: "",
      focusTask: "",
      focusTime: "",
      neededInputs: "",
    };
    saveDailyInputs(emptyInputs);
  };

  const updateGoal = (index: number, newText: string) => {
    const updatedGoals = [...majorGoals];
    updatedGoals[index] = newText.trim();
    saveMajorGoals(updatedGoals);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-xl font-bold mb-8 text-white">
        Kill today&apos;s procrastination
      </h1>

      <Section className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">Goals</h2>
        <p className="text-xl">What are your overall goals?</p>
        <p className="text-gray-400 mb-4">Click on a goal to edit</p>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-2 w-full">
              {majorGoals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start text-white text-lg gap-4 w-full"
                >
                  <Input
                    type="text"
                    value={goal}
                    onChange={(e) => updateGoal(index, e.target.value)}
                    className="border-0 bg-transparent"
                  />
                  <button
                    onClick={() => deleteMajorGoal(index)}
                    className="text-gray-400 hover:text-white transition-colors py-3 px-4"
                    aria-label="Delete goal"
                  >
                    <IoMdClose size={24} />
                  </button>
                </li>
              ))}
            </ul>
            {majorGoals.length < 3 && (
              <div className="mt-6 flex space-x-4 items-center">
                <Input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Enter a new major goal"
                />
                <button
                  onClick={addMajorGoal}
                  className="border border-gray-600 text-white hover:bg-blue-600 transition-colors text-lg text-nowrap rounded-full p-4"
                  aria-label="Add goal"
                >
                  <FaPlus />
                </button>
              </div>
            )}
          </>
        )}
      </Section>

      <Section className="space-y-4">
        <h2 className="text-3xl font-semibold mb-6 text-white">Daily Inputs</h2>
        <div>
          <Textarea
            label="What do you want to accomplish next?"
            description="Describe the optimal outcome you want to achieve, rather than how you're going to do it."
            id="achievement"
            value={dailyInputs.achievement}
            onChange={(e) =>
              saveDailyInputs({ ...dailyInputs, achievement: e.target.value })
            }
          />
        </div>
        <div>
          <Select
            label="With what major goal does that align?"
            options={[
              ...majorGoals.map((goal) => ({
                value: goal,
                label: goal,
              })),
              { value: "none", label: "None" },
            ]}
            id="alignedGoal"
            value={dailyInputs.alignedGoal}
            onChange={(e) =>
              saveDailyInputs({ ...dailyInputs, alignedGoal: e.target.value })
            }
          />
        </div>
        <div>
          <Textarea
            label="What task are you going to focus on today to achieve that?"
            id="focusTask"
            value={dailyInputs.focusTask}
            onChange={(e) =>
              saveDailyInputs({ ...dailyInputs, focusTask: e.target.value })
            }
          />
        </div>
        <div>
          <Input
            label="For how long will you focus on that?"
            description="How much time do you plan to spend giving your full attention to the task?"
            type="text"
            id="focusTime"
            value={dailyInputs.focusTime}
            onChange={(e) =>
              saveDailyInputs({ ...dailyInputs, focusTime: e.target.value })
            }
          />
        </div>
        {/* <div>
          <Textarea
            label="What inputs do you need?"
            id="neededInputs"
            value={dailyInputs.neededInputs}
            onChange={(e) =>
              saveDailyInputs({ ...dailyInputs, neededInputs: e.target.value })
            }
            rows={3}
          />
        </div> */}
        <div className="flex justify-end">
          <button
            onClick={resetDailyInputs}
            className="mt-8 bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors text-lg"
          >
            Reset Daily Inputs
          </button>
        </div>
      </Section>
    </div>
  );
}
