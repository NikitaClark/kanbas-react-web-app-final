import React from "react";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariablesAndConstants";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes"; 
import Styles from "./Styles";
import Add from "./Add"; // Import the Add component
import Square from "./Square"; // Import the Square component
import Highlight from "./Highlight"; // Import the Highlight component
import PathParameters from "./PathParameters"; // Import the PathParameters component


const Lab3 = () => {
  return (
    <div>
      <h3>Lab 3 Component</h3>
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <VariableTypes />
      <ConditionalOutputIfElse />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <PathParameters />


      {/* Add Component */}
      <Add a={3} b={4} />

      {/* Square Component */}
      <h4>Square of 4</h4>
      <Square>4</Square>

      <hr />

      {/* Highlight Component */}
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam vel
        nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>

    </div>
  );
};

export default Lab3;
