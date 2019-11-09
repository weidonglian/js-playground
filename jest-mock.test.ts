import * as math from './math'
import * as mathApp from './math-app'

test("add 1+2", () => {
    expect(1+2).toBe(3)
})

test("return undefined by default", () => {
    const mock = jest.fn((t: string) => {
        return "hello " + t
    })

    let result = mock("hello")
    expect(result).toBe("hello hello")
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith("hello")
})

test("mock math", () => {
    (math.subtract as any) = jest.fn()
    expect(mathApp.doSubtract(1, 2)).toBe(undefined)
    expect(math.subtract).toBeCalledTimes(1)
    expect(math.subtract).toBeCalledWith(1, 2)
})

test("mock math with spy on", () => {
    const addMock = jest.spyOn(math, "add")
    addMock.mockImplementation((a: number, b: number) => { return 0})
    expect(mathApp.doAdd(1, 2)).toBe(0)
    addMock.mockRestore()
    expect(mathApp.doAdd(1, 2)).toBe(3)
})