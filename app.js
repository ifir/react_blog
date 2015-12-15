var express = require('express');
var path = require('path');
var reactviews = require('express-react-views');
var app = express();

var routes = require('./src/routes/index');
app.use('/', routes);
//静态资源访问
app.use(express.static(path.join(__dirname, 'src/output')));
//设置模板为react
var options = { beautify: true };//html格式化，默认false
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactviews.createEngine(options));

app.listen(3000, function () {
  console.log('===============Hello Node!===============');//在命令行输出Hello Node!
});  
