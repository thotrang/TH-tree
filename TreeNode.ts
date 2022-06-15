export class TreeNode<T>{
    public _data: T;
    public _left: TreeNode<T> | null;
    public _right: TreeNode<T> | null;

    constructor(data: T) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
}