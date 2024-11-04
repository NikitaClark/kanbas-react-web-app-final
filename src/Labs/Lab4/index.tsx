import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples"; // Import ReduxExamples component

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <h3>HTML Examples</h3>

      {/* Other sections of Lab 4 */}
      <div id="wd-h-tag"></div>
      <div id="wd-p-tag"></div>
      <div id="wd-lists"></div>
      <div id="wd-tables"></div>
      <div id="wd-images"></div>
      <div id="wd-forms"></div>

      {/* Click Event Section */}
      <ClickEvent />

      {/* Passing Data on Event Section */}
      <PassingDataOnEvent />

      {/* Passing Functions Section */}
      <PassingFunctions theFunction={sayHello} />

      {/* Event Object Section */}
      <EventObject />

      {/* Counter Section */}
      <Counter />

      {/* Boolean State Variables Section */}
      <BooleanStateVariables />

      {/* String State Variables Section */}
      <StringStateVariables />

      {/* Date State Variable Section */}
      <DateStateVariable />

      {/* Object State Variable Section */}
      <ObjectStateVariable />

      {/* Array State Variable Section */}
      <ArrayStateVariable />

      {/* Parent State Variable Section */}
      <ParentStateComponent />

      {/* Redux Examples Section */}
      <ReduxExamples />
    </div>
  );
}
