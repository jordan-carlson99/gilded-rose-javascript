export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
// extend item class
// update Quality calls extended methods

// day tick causes quality --

export class RegularItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  qualityReduction() {
    let reduction = 1;
    if (this.sellIn < 1) {
      reduction = 2;
    }
    if (this.name == "Aged Brie") {
      this.quality++;
      this.sellIn--;
    } else if (this.name == "Sulfuras, Hand of Ragnaros") {
      this.sellIn--;
    } else if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      // 10 day
      // 5 day
      // 0 day
    } else {
      this.quality = this.quality - reduction;
      this.sellIn--;
    }
  }
}

export let items = [];

items.push(new RegularItem("+5 Dexterity Vest", 10, 20));
items.push(new RegularItem("Elixir of the Mongoose", 5, 7));
items.push(new RegularItem("Conjured Mana Cake", 3, 6));
// special case
items.push(new RegularItem("Aged Brie", 2, 0));

items.push(new RegularItem("Sulfuras, Hand of Ragnaros", 0, 80));

items.push(
  new RegularItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)
);

export const updateQuality = () => {
  for (let item of items) {
    item.qualityReduction();
    //   if (
    //     item.name != "Aged Brie" &&
    //     item.name != "Backstage passes to a TAFKAL80ETC concert"
    //   ) {
    //     if (item.quality > 0) {
    //       if (item.name != "Sulfuras, Hand of Ragnaros") {
    //         item.quality = item.quality - 1;
    //       }
    //     }
    //   } else {
    //     if (item.quality < 50) {
    //       item.quality = item.quality + 1;
    //       if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    //         if (item.sellIn < 11) {
    //           if (item.quality < 50) {
    //             item.quality = item.quality + 1;
    //           }
    //         }
    //         if (item.sellIn < 6) {
    //           if (item.quality < 50) {
    //             item.quality = item.quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (item.name != "Sulfuras, Hand of Ragnaros") {
    //     item.sellIn = item.sellIn - 1;
    //   }
    //   if (item.sellIn < 0) {
    //     if (item.name != "Aged Brie") {
    //       if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
    //         if (item.quality > 0) {
    //           if (item.name != "Sulfuras, Hand of Ragnaros") {
    //             item.quality = item.quality - 1;
    //           }
    //         }
    //       } else {
    //         item.quality = item.quality - item.quality;
    //       }
    //     } else {
    //       if (item.quality < 50) {
    //         item.quality = item.quality + 1;
    //       }
    //     }
    //   }
  }
};
updateQuality();
