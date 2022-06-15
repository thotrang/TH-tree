import { TreeNode } from "./TreeNode";

export class Tree<T>{
    _root: TreeNode<T> | null
    _total: number;
    constructor() {
        this._root = null;
        this._total = 0;
    };

    insert(data: T): TreeNode<T> {
        if (!this._root) {
            this._root = new TreeNode<T>(data);
            this._total++;
            return this._root;
        } else {
            let currrent = this._root;
            let node = new TreeNode<T>(data);
            while (currrent) {
                if (data < currrent._data) {
                    if(!currrent._right){
                        currrent._right = node;
                        break;
                    }else{
                        currrent=currrent._right;
                    } 
                } else if (data > currrent._data) {
                    if(!currrent._left){
                        currrent._left = node;
                        break;
                    }else{
                        currrent=currrent._left;
                    }    
                } 
            }
            this._total++;
            return currrent;
        }
    }
    search(root: TreeNode<T>, findValue: T): TreeNode<T> | undefined {
        let current = root;
        while (current._data !== findValue) {
            if (findValue > current._data) {
                if (current._right == null) {
                    return undefined;
                }
                current = current._right;
            } else if (findValue < current._data) {
                if (current._left == null) {
                    return undefined;
                }
                current = current._left;
            }
        }
        return current;
    }
}

