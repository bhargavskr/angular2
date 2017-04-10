System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters:[],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ["Milk", "Bread"];
                }
                DataService.prototype.getRandomData = function () {
                    return this._data[Math.floor(Math.random() * this._data.length)];
                };
                DataService.prototype.insertData = function (val) {
                    this._data.push(val);
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ1ksVUFBSyxHQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQVdwQyxDQUFDO2dCQVRHLG1DQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxHQUFVO29CQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFHTCxrQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscUNBWUMsQ0FBQSIsImZpbGUiOiJkYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVNlcnZpY2V7XG4gICAgcHJpdmF0ZSBfZGF0YT1bXCJNaWxrXCIsIFwiQnJlYWRcIl07XG5cbiAgICBnZXRSYW5kb21EYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLl9kYXRhLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGluc2VydERhdGEodmFsOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCh2YWwpO1xuICAgIH1cblxuXG59XG5cblxuIl19
