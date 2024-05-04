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
}

const renderTreeItems = (nodes: TreeNode[]): JSX.Element[] =>
  nodes.map((node) => (
    <TreeItem key={node.itemId} itemId={node.itemId} label={node.label}>
      {node.children && renderTreeItems(node.children)}
    </TreeItem>
  ));

const SimpleTreeView: React.FC<SimpleTreeViewProps> = ({
  treeData,
  className,
}) => (
  <MuiSimpleTreeView className={className}>
    <Typography>Tree Items</Typography>
    {renderTreeItems(treeData)}
  </MuiSimpleTreeView>
);

export default SimpleTreeView;
