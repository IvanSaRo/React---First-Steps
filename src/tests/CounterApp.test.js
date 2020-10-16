import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  test("Debe mostrar <CounterApp /> correctamente", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const textoh2 = wrapper.find("h2").text().trim(); //trim elimina los espacios

    expect(textoh2).toBe("100");
  });
});
