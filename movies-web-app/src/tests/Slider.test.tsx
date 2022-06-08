import { act, renderHook } from "@testing-library/react";
import useSliderReducer from "../hooks/slider-reducer";

test("Should return initial value", () => {
  const { result } = renderHook(() => useSliderReducer(20));
  const [{ count }, { increase, decrease }] = result.current;
  expect(count).toBe(0);
});
test("Should return initial value not 0", () => {
  const { result } = renderHook(() => useSliderReducer(20, 19));
  const [{ count }, { increase, decrease }] = result.current;

  expect(count).toBe(19);
});
test("Should increase one", async () => {
  const { result } = renderHook(() => useSliderReducer(20, 4));
  act(() => {
    result.current[1].increase();
  });
  expect(result.current[0].count).toBe(5);
});
test("Should decrease one", async () => {
  const { result } = renderHook(() => useSliderReducer(20, 4));
  act(() => {
    result.current[1].decrease();
  });
  expect(result.current[0].count).toBe(3);
});
test("Should decrease one infinity", async () => {
  const { result } = renderHook(() => useSliderReducer(20, 19));
  act(() => {
    result.current[1].increase();
  });
  expect(result.current[0].count).toBe(0);
});
test("Should decrease one", async () => {
  const { result } = renderHook(() => useSliderReducer(20));
  act(() => {
    result.current[1].decrease();
  });
  expect(result.current[0].count).toBe(19);
});
