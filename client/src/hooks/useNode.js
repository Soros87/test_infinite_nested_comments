const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    //TODO
    if (!tree) {
      return null;
    }
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        items: [],
      });
      return tree; // Return the modified tree when the commentId matches
    }

    // Map through tree items and recursively call insertNode on each child node
    const updatedItems = tree.items.map((ob) => {
      // Recursively call insertNode on the child node
      const updatedChild = insertNode(ob, commentId, item);
      return updatedChild || ob; // Return the updated child or the original if no change
    });

    return { ...tree, items: updatedItems };
  };

  const editNode = (tree, commentId, value) => {
    //TODO
    if (!tree) {
      return null;
    }

    if (tree.id === commentId) {
      tree.name = value;
      return tree;
    }

    tree.items.map((ob) => {
      return editNode(ob, commentId, value);
    });

    return { ...tree };
  };

  const deleteNode = (tree, commentId) => {
    //TODO
    return;
  };

  return { insertNode, editNode, deleteNode };
};

export default useNode;
