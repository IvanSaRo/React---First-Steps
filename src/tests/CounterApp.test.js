import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  let wrapper = shallow(<CounterApp />); //lo inicializo aquí para no perder la ayuda de VS

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const textoh2 = wrapper.find("h2").text().trim(); //trim elimina los espacios

    expect(textoh2).toBe("100");
  });

  test("Debe incrementar el marcador al pulsar +1", () => {
    /*  const button = */ wrapper.find("button").at(0).simulate("click");
    // console.log(button.html());

    const textoh2 = wrapper.find("h2").text().trim();

    expect(textoh2).toBe("11");
  });

  test("Debe decrementar el marcador al pulsar -1", () => {
    wrapper.find("button").at(2).simulate("click");
    // console.log(button.html());

    const textoh2 = wrapper.find("h2").text().trim();

    expect(textoh2).toBe("9");
  });

  test("El botón reset ha de colocar el valor por defecto", () => {
    const wrapper = shallow(<CounterApp value={200} />);

    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const textoh2 = wrapper.find("h2").text().trim();

    expect(textoh2).toBe('200');
  });
});
