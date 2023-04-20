import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, RegularItem } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new RegularItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("quality decreases by 2 when sellIn is less than 0", () => {
    const testItem = new RegularItem("basic", 0, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
  });
  // quality is never negative
  // 0 < quality < 50
  it("quality is between 0 and 50", () => {
    const testItem = new RegularItem("basic", 0, 10);
    const testItem2 = { name: "Aged Brie", quality: 50, sellIn: 10 };
    items.push(testItem);
    items.push(testItem2);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem2.quality).toBe(50);
  });
  // aged brie goes up in quality each day
  it("aged brie quality goes up each day", () => {
    const testItem = new RegularItem("Aged Brie", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(11);
  });
  // "Sulfuras, Hand of Ragnaros," never decreases in quality.
  it(`"Sulfuras, Hand of Ragnaros," never decreases in quality`, () => {
    const testItem = {
      name: "Sulfuras, Hand of Ragnaros",
      quality: 10,
      sellIn: 10,
    };
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(10);
  });
  // conjured items quiality goes down by 2 each day
  // it(`"conjured items" quality goes down by 2 each day`, () => {
  //   const testItem = {
  //     name: "Conjured Mana Cake",
  //     quality: 10,
  //     sellIn: 10,
  //   };
  //   items.push(testItem);

  //   updateQuality();

  //   expect(testItem.quality).toBe(8);
  // });
  // quality increases by 2 when there are 10 days or less left before the concert.
  it(`"Backstage passes to a TAFKAL80ETC concert" quality increases by 2 
  if 10 days or less left before the concert.`, () => {
    const testItem = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 10,
      sellIn: 10,
    };
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(12);
  });
  // quality increases by 3 when there are 5 days or less left before the concert.
  it(`"Backstage passes to a TAFKAL80ETC concert" quality increases by 3 
  if 5 days or less left before the concert.`, () => {
    const testItem = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 10,
      sellIn: 5,
    };
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(13);
  });
  // quality drops to 0 after the concert.
  it(`"Backstage passes to a TAFKAL80ETC concert" quality 0 
  if 0 days left before the concert.`, () => {
    const testItem = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 10,
      sellIn: 0,
    };
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  });
});
