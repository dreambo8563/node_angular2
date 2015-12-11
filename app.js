var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var logo = require('./routes/logo');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/logo', logo);
app.listen(3000, function () { console.log('Demo started'); });
module.exports = app;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QixJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUNqQyxJQUFZLFlBQVksV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUM5QyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUUxQyxJQUFZLE1BQU0sV0FBSyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hDLElBQVksSUFBSSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBRXRDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBR3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBSS9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXhELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBaUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxpQkFBUyxHQUFHLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyB2YXIgZmF2aWNvbiA9IHJlcXVpcmUoJ3NlcnZlLWZhdmljb24nKTtcclxuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCAqIGFzIGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcblxyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbScuL3JvdXRlcy9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGxvZ28gZnJvbSAnLi9yb3V0ZXMvbG9nbyc7XHJcblxyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdmlldyBlbmdpbmUgc2V0dXBcclxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAndmlld3MnKSk7XHJcbmFwcC5lbmdpbmUoJ2h0bWwnLCByZXF1aXJlKCdlanMnKS5yZW5kZXJGaWxlKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xyXG5cclxuLy8gdW5jb21tZW50IGFmdGVyIHBsYWNpbmcgeW91ciBmYXZpY29uIGluIC9wdWJsaWNcclxuLy9hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdmYXZpY29uLmljbycpKSk7XHJcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5cclxuYXBwLnVzZSgnLycsIHJvdXRlcyk7XHJcbmFwcC51c2UoJy9sb2dvJywgbG9nbyk7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbi8vICAgdmFyIGVyciA9IG5ldyBFcnJvcignTm90IEZvdW5kJyk7XHJcbi8vICAgZXJyLnN0YXR1cyA9IDQwNDtcclxuLy8gICBuZXh0KGVycik7XHJcbi8vIH0pO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxlcnNcclxuXHJcbi8vIGRldmVsb3BtZW50IGVycm9yIGhhbmRsZXJcclxuLy8gd2lsbCBwcmludCBzdGFja3RyYWNlXHJcbi8vIGlmIChhcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4vLyAgIGFwcC51c2UoZnVuY3Rpb24oZXJyLCByZXEsIHJlcywgbmV4dCkge1xyXG4vLyAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbi8vICAgICByZXMucmVuZGVyKCdlcnJvcicsIHtcclxuLy8gICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXHJcbi8vICAgICAgIGVycm9yOiBlcnJcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBwcm9kdWN0aW9uIGVycm9yIGhhbmRsZXJcclxuLy8gbm8gc3RhY2t0cmFjZXMgbGVha2VkIHRvIHVzZXJcclxuLy8gYXBwLnVzZShmdW5jdGlvbihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XHJcbi8vICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbi8vICAgcmVzLnJlbmRlcignZXJyb3InLCB7XHJcbi8vICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcclxuLy8gICAgIGVycm9yOiB7fVxyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuLy9hZGQgdGhpcyBsaW5lIHRvIGxhdW5jaCBwcm9ncmFtbWUgd2l0aCBub2RlLWRldiAtLWRlYnVnIGFwcC5qc1xyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHsgY29uc29sZS5sb2coJ0RlbW8gc3RhcnRlZCcpIH0pO1xyXG5cclxuZXhwb3J0ID0gYXBwO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
