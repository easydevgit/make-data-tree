const data = [
  {
    id: 1,
    name: "test node1",
    parentNode: null,
    type: 3,
  },
  {
    id: 2,
    name: "test node2",
    parentNode: null,
    type: 2,
  },
  {
    id: 3,
    name: "test node3",
    parentNode: 1,
    type: 7,
  },
  {
    id: 4,
    name: "test node4",
    parentNode: 1,
    type: 7,
  },
  {
    id: 5,
    name: "test node5",
    parentNode: 4,
    type: 7,
  },
];

const makeDataTree = (dataset, id, parentNodeName, childNodesName) => {
  const hashTable = {};

  dataset.forEach(
    (item) => (hashTable[item[id]] = { ...item, [childNodesName]: [] })
  );

  const dataTree = [];
  dataset.forEach((item) => {
    if (item[parentNodeName] && hashTable[item[parentNodeName]]) {
      hashTable[item[parentNodeName]][childNodesName].push(hashTable[item[id]]);
    } else {
      dataTree.push(hashTable[item[id]]);
    }
  });

  return dataTree;
};

const res = makeDataTree(data, "id", "parentNode", "childNodes");

console.log(JSON.stringify(res, null, 4));
