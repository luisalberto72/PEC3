"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @class Model
 *
 * Manages the data of the application.
 */
var Todo = /** @class */ (function () {
    function Todo(_a) {
        var _b = _a === void 0 ? { text: '', complete: false } : _a, text = _b.text, complete = _b.complete;
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    Todo.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return Todo;
}());
exports.Todo = Todo;
