import orderByProps from "../object";

test("should return properties in specified order and then alphabetically", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const sortedObj = orderByProps(obj, ["name", "level"]);
  const result = [
    { key: "name", value: "мечник" }, 
    { key: "level", value: 2 }, 
    { key: "attack", value: 80 }, 
    { key: "defence", value: 40 }, 
    { key: "health", value: 10 }, 
  ];
  expect(sortedObj).toEqual(result);
});

test("handles case with no sorting order", () => {
    const obj = {
      name: "мечник",
      level: 2,
      health: 10,
      attack: 80,
      defence: 40,
    };
    const sortedObj = orderByProps(obj, ["name", "level"]);
    const result = [
      { key: "name", value: "мечник" }, 
      { key: "level", value: 2 }, 
      { key: "attack", value: 80 }, 
      { key: "defence", value: 40 }, 
      { key: "health", value: 10 }, 
    ];
    expect(sortedObj).toEqual(result);
  });

  test("handles case with no matching keys in the order array", () => {
    const obj = {
      name: "мечник",
      level: 2,
      health: 10,
      attack: 80,
      defence: 40,
    };
    const sortedObj = orderByProps(obj, ["speed", "weight"]);
    const result = [
      { key: "attack", value: 80 }, 
      { key: "defence", value: 40 }, 
      { key: "health", value: 10 },
      { key: "level", value: 2 }, 
      { key: "name", value: "мечник" },
    ];
    expect(sortedObj).toEqual(result);
  });

  test("returns empty array for an empty object", () => {
    const obj = {};
    const sortedObj = orderByProps(obj, ["speed", "weight"]);
    expect(sortedObj).toEqual([]);
  });
