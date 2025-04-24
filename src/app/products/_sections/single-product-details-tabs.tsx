import React from "react";

export const SingleProductDetailsTab = () => {
  return (
    <div className="border rounded-md mb-8">
      <div className="flex border-b">
        <button className="px-6 py-3 text-sm font-medium border-b-2 border-primary text-primary">
          Description
        </button>
        <button className="px-6 py-3 text-sm font-medium text-gray-500">
          Reviews
        </button>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-4">
          SAHALE SNACKS Raspberry Crumble Cashew Mix blends juicy raspberries
          and crunchy cashews with a hint of vanilla goodness and offers the
          perfect premium snack experience.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Our Glazed Mix is made with real, whole ingredients that are expertly
          roasted, carefully paired with fruits and nuts, and gently tumbled
          with our proprietary glazing process. The delicious,
          thoughtfully-crafted premium snacks are a perfect pick-me-up.
        </p>

        <h3 className="font-medium mb-2 mt-6">Packaging & Delivery</h3>
        <p className="text-sm text-gray-600 mb-4">
          All of our products are hand-packaged with exceptional handling care
          to ensure they arrive in perfect condition. Any time you receive a
          shipment, we encourage you to inspect the packaging and contents
          before accepting delivery. If there are any issues, please contact us
          right away so we can make it right.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          We are committed to eco-friendly packaging and shipping practices. We
          use recycled content materials and aim to minimize our carbon
          footprint across the entire supply chain. Our packaging is designed to
          be both functional and sustainable, compared with most standard
          flexible packaging.
        </p>

        <h3 className="font-medium mb-2 mt-6">Suggested Use</h3>
        <p className="text-sm text-gray-600 mb-2">
          Refrigeration not necessary.
        </p>
        <p className="text-sm text-gray-600 mb-4">Can be eaten any time.</p>

        <h3 className="font-medium mb-2 mt-6">Other Ingredients</h3>
        <p className="text-sm text-gray-600 mb-2">
          Organic ingredients: organic raw cashews.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Raspberry crumble mix: raspberries, organic cane sugar, organic
          coconut.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Made in kitchen that processes tree nuts and wheat (gluten), dairy,
          soy.
        </p>

        <h3 className="font-medium mb-2 mt-6">Warnings</h3>
        <p className="text-sm text-gray-600">
          All ingredients sourced naturally. May contain pieces of shell.
        </p>
      </div>
    </div>
  );
};
