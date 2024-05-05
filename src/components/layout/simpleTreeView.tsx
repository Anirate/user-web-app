import React from "react";
import {
  SimpleTreeView as MuiSimpleTreeView,
  TreeItem,
} from "@mui/x-tree-view";
import { Typography } from "@mui/material";

interface TreeNode {
  itemId: string;
  label: string;
  children?: TreeNode[];
}

interface SimpleTreeViewProps {
  treeData: TreeNode[];
  className?: string;
  onItemSelect: (itemId: string) => void;
}

const renderTreeItems = (
  nodes: TreeNode[],
  onItemSelect: (itemId: string) => void
): JSX.Element[] =>
  nodes.map((node) => (
    <TreeItem
      key={node.itemId}
      itemId={node.itemId}
      label={node.label}
      onClick={() => onItemSelect(node.itemId)}
    >
      {node.children && renderTreeItems(node.children, onItemSelect)}
    </TreeItem>
  ));

const SimpleTreeView: React.FC<SimpleTreeViewProps> = ({
  treeData,
  className,
  onItemSelect,
}) => (
  <MuiSimpleTreeView className={className}>
    <Typography>Tree Items</Typography>
    {renderTreeItems(treeData, onItemSelect)}
  </MuiSimpleTreeView>
);

export default SimpleTreeView;
