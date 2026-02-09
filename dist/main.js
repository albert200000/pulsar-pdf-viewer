var $jobL2$fs = require("fs");
var $jobL2$util = require("util");
var $jobL2$assert = require("assert");
var $jobL2$constants = require("constants");
var $jobL2$stream = require("stream");
var $jobL2$path = require("path");
var $jobL2$os = require("os");
var $jobL2$atom = require("atom");
var $jobL2$electron = require("electron");
var $jobL2$events = require("events");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirebdf0"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirebdf0"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("5QYQ7", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $44310092fb7574e3$require$u = $1OvF7.fromCallback;

var $dwXXI = parcelRequire("dwXXI");
const $44310092fb7574e3$var$api = [
    'access',
    'appendFile',
    'chmod',
    'chown',
    'close',
    'copyFile',
    'fchmod',
    'fchown',
    'fdatasync',
    'fstat',
    'fsync',
    'ftruncate',
    'futimes',
    'lchown',
    'lchmod',
    'link',
    'lstat',
    'mkdir',
    'mkdtemp',
    'open',
    'readFile',
    'readdir',
    'readlink',
    'realpath',
    'rename',
    'rmdir',
    'stat',
    'symlink',
    'truncate',
    'unlink',
    'utimes',
    'writeFile'
].filter((key)=>{
    // Some commands are not available on some systems. Ex:
    // fs.copyFile was added in Node.js v8.5.0
    // fs.mkdtemp was added in Node.js v5.10.0
    // fs.lchown is not available on at least some Linux
    return typeof $dwXXI[key] === 'function';
});
// Export all keys:
Object.keys($dwXXI).forEach((key)=>{
    if (key === 'promises') // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return;
    module.exports[key] = $dwXXI[key];
});
// Universalify async methods:
$44310092fb7574e3$var$api.forEach((method)=>{
    module.exports[method] = $44310092fb7574e3$require$u($dwXXI[method]);
});
// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
module.exports.exists = function(filename, callback) {
    if (typeof callback === 'function') return $dwXXI.exists(filename, callback);
    return new Promise((resolve)=>{
        return $dwXXI.exists(filename, resolve);
    });
};
// fs.read() & fs.write need special treatment due to multiple callback args
module.exports.read = function(fd, buffer, offset, length, position, callback) {
    if (typeof callback === 'function') return $dwXXI.read(fd, buffer, offset, length, position, callback);
    return new Promise((resolve, reject)=>{
        $dwXXI.read(fd, buffer, offset, length, position, (err, bytesRead, buffer)=>{
            if (err) return reject(err);
            resolve({
                bytesRead: bytesRead,
                buffer: buffer
            });
        });
    });
};
// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args
module.exports.write = function(fd, buffer, ...args) {
    if (typeof args[args.length - 1] === 'function') return $dwXXI.write(fd, buffer, ...args);
    return new Promise((resolve, reject)=>{
        $dwXXI.write(fd, buffer, ...args, (err, bytesWritten, buffer)=>{
            if (err) return reject(err);
            resolve({
                bytesWritten: bytesWritten,
                buffer: buffer
            });
        });
    });
};
// fs.realpath.native only available in Node v9.2+
if (typeof $dwXXI.realpath.native === 'function') module.exports.realpath.native = $44310092fb7574e3$require$u($dwXXI.realpath.native);

});
parcelRegister("1OvF7", function(module, exports) {

$parcel$export(module.exports, "fromCallback", () => $1523056d3a9728a7$export$d0deb4828877173, (v) => $1523056d3a9728a7$export$d0deb4828877173 = v);
$parcel$export(module.exports, "fromPromise", () => $1523056d3a9728a7$export$60f45028237c39d1, (v) => $1523056d3a9728a7$export$60f45028237c39d1 = v);
var $1523056d3a9728a7$export$d0deb4828877173;
var $1523056d3a9728a7$export$60f45028237c39d1;
'use strict';
$1523056d3a9728a7$export$d0deb4828877173 = function(fn) {
    return Object.defineProperty(function() {
        if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments);
        else return new Promise((resolve, reject)=>{
            arguments[arguments.length] = (err, res)=>{
                if (err) return reject(err);
                resolve(res);
            };
            arguments.length++;
            fn.apply(this, arguments);
        });
    }, 'name', {
        value: fn.name
    });
};
$1523056d3a9728a7$export$60f45028237c39d1 = function(fn) {
    return Object.defineProperty(function() {
        const cb = arguments[arguments.length - 1];
        if (typeof cb !== 'function') return fn.apply(this, arguments);
        else fn.apply(this, arguments).then((r)=>cb(null, r), cb);
    }, 'name', {
        value: fn.name
    });
};

});

parcelRegister("dwXXI", function(module, exports) {


var $bhy5Q = parcelRequire("bhy5Q");

var $lRgF2 = parcelRequire("lRgF2");

var $dbhJh = parcelRequire("dbhJh");

/* istanbul ignore next - node 0.x polyfill */ var $9d9cc6bd5341791b$var$gracefulQueue;
var $9d9cc6bd5341791b$var$previousSymbol;
/* istanbul ignore else - node 0.x polyfill */ if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
    $9d9cc6bd5341791b$var$gracefulQueue = Symbol.for('graceful-fs.queue');
    // This is used in testing by future versions
    $9d9cc6bd5341791b$var$previousSymbol = Symbol.for('graceful-fs.previous');
} else {
    $9d9cc6bd5341791b$var$gracefulQueue = '___graceful-fs.queue';
    $9d9cc6bd5341791b$var$previousSymbol = '___graceful-fs.previous';
}
function $9d9cc6bd5341791b$var$noop() {}
function $9d9cc6bd5341791b$var$publishQueue(context, queue) {
    Object.defineProperty(context, $9d9cc6bd5341791b$var$gracefulQueue, {
        get: function() {
            return queue;
        }
    });
}
var $9d9cc6bd5341791b$var$debug = $9d9cc6bd5341791b$var$noop;
if ($jobL2$util.debuglog) $9d9cc6bd5341791b$var$debug = $jobL2$util.debuglog('gfs4');
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) $9d9cc6bd5341791b$var$debug = function() {
    var m = $jobL2$util.format.apply($jobL2$util, arguments);
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
    console.error(m);
};

// Once time initialization
if (!$jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue]) {
    // This queue can be shared by multiple loaded instances
    var $9d9cc6bd5341791b$var$queue = $parcel$global[$9d9cc6bd5341791b$var$gracefulQueue] || [];
    $9d9cc6bd5341791b$var$publishQueue($jobL2$fs, $9d9cc6bd5341791b$var$queue);
    // Patch fs.close/closeSync to shared queue version, because we need
    // to retry() whenever a close happens *anywhere* in the program.
    // This is essential when multiple graceful-fs instances are
    // in play at the same time.
    $jobL2$fs.close = function(fs$close) {
        function close(fd, cb) {
            return fs$close.call($jobL2$fs, fd, function(err) {
                // This function uses the graceful-fs shared queue
                if (!err) $9d9cc6bd5341791b$var$retry();
                if (typeof cb === 'function') cb.apply(this, arguments);
            });
        }
        Object.defineProperty(close, $9d9cc6bd5341791b$var$previousSymbol, {
            value: fs$close
        });
        return close;
    }($jobL2$fs.close);
    $jobL2$fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
            // This function uses the graceful-fs shared queue
            fs$closeSync.apply($jobL2$fs, arguments);
            $9d9cc6bd5341791b$var$retry();
        }
        Object.defineProperty(closeSync, $9d9cc6bd5341791b$var$previousSymbol, {
            value: fs$closeSync
        });
        return closeSync;
    }($jobL2$fs.closeSync);
    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) process.on('exit', function() {
        $9d9cc6bd5341791b$var$debug($jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue]);
        $jobL2$assert.equal($jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue].length, 0);
    });
}
if (!$parcel$global[$9d9cc6bd5341791b$var$gracefulQueue]) $9d9cc6bd5341791b$var$publishQueue($parcel$global, $jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue]);
module.exports = $9d9cc6bd5341791b$var$patch($dbhJh($jobL2$fs));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !$jobL2$fs.__patched) {
    module.exports = $9d9cc6bd5341791b$var$patch($jobL2$fs);
    $jobL2$fs.__patched = true;
}
function $9d9cc6bd5341791b$var$patch(fs) {
    // Everything that references the open() function needs to be in here
    $bhy5Q(fs);
    fs.gracefulify = $9d9cc6bd5341791b$var$patch;
    fs.createReadStream = createReadStream;
    fs.createWriteStream = createWriteStream;
    var fs$readFile = fs.readFile;
    fs.readFile = readFile;
    function readFile(path, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path, options, cb) {
            return fs$readFile(path, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) $9d9cc6bd5341791b$var$enqueue([
                    go$readFile,
                    [
                        path,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                    $9d9cc6bd5341791b$var$retry();
                }
            });
        }
    }
    var fs$writeFile = fs.writeFile;
    fs.writeFile = writeFile;
    function writeFile(path, data, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path, data, options, cb) {
            return fs$writeFile(path, data, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) $9d9cc6bd5341791b$var$enqueue([
                    go$writeFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                    $9d9cc6bd5341791b$var$retry();
                }
            });
        }
    }
    var fs$appendFile = fs.appendFile;
    if (fs$appendFile) fs.appendFile = appendFile;
    function appendFile(path, data, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path, data, options, cb) {
            return fs$appendFile(path, data, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) $9d9cc6bd5341791b$var$enqueue([
                    go$appendFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                    $9d9cc6bd5341791b$var$retry();
                }
            });
        }
    }
    var fs$readdir = fs.readdir;
    fs.readdir = readdir;
    function readdir(path, options, cb) {
        var args = [
            path
        ];
        if (typeof options !== 'function') args.push(options);
        else cb = options;
        args.push(go$readdir$cb);
        return go$readdir(args);
        function go$readdir$cb(err, files) {
            if (files && files.sort) files.sort();
            if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) $9d9cc6bd5341791b$var$enqueue([
                go$readdir,
                [
                    args
                ]
            ]);
            else {
                if (typeof cb === 'function') cb.apply(this, arguments);
                $9d9cc6bd5341791b$var$retry();
            }
        }
    }
    function go$readdir(args) {
        return fs$readdir.apply(fs, args);
    }
    if (process.version.substr(0, 4) === 'v0.8') {
        var legStreams = $lRgF2(fs);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs.ReadStream;
    if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs.WriteStream;
    if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs, 'ReadStream', {
        get: function() {
            return ReadStream;
        },
        set: function(val) {
            ReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fs, 'WriteStream', {
        get: function() {
            return WriteStream;
        },
        set: function(val) {
            WriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    // legacy names
    var FileReadStream = ReadStream;
    Object.defineProperty(fs, 'FileReadStream', {
        get: function() {
            return FileReadStream;
        },
        set: function(val) {
            FileReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs, 'FileWriteStream', {
        get: function() {
            return FileWriteStream;
        },
        set: function(val) {
            FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    function ReadStream(path, options) {
        if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;
        else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                if (that.autoClose) that.destroy();
                that.emit('error', err);
            } else {
                that.fd = fd;
                that.emit('open', fd);
                that.read();
            }
        });
    }
    function WriteStream(path, options) {
        if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;
        else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                that.destroy();
                that.emit('error', err);
            } else {
                that.fd = fd;
                that.emit('open', fd);
            }
        });
    }
    function createReadStream(path, options) {
        return new fs.ReadStream(path, options);
    }
    function createWriteStream(path, options) {
        return new fs.WriteStream(path, options);
    }
    var fs$open = fs.open;
    fs.open = open;
    function open(path, flags, mode, cb) {
        if (typeof mode === 'function') cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path, flags, mode, cb) {
            return fs$open(path, flags, mode, function(err, fd) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) $9d9cc6bd5341791b$var$enqueue([
                    go$open,
                    [
                        path,
                        flags,
                        mode,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                    $9d9cc6bd5341791b$var$retry();
                }
            });
        }
    }
    return fs;
}
function $9d9cc6bd5341791b$var$enqueue(elem) {
    $9d9cc6bd5341791b$var$debug('ENQUEUE', elem[0].name, elem[1]);
    $jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue].push(elem);
}
function $9d9cc6bd5341791b$var$retry() {
    var elem = $jobL2$fs[$9d9cc6bd5341791b$var$gracefulQueue].shift();
    if (elem) {
        $9d9cc6bd5341791b$var$debug('RETRY', elem[0].name, elem[1]);
        elem[0].apply(null, elem[1]);
    }
}

});
parcelRegister("bhy5Q", function(module, exports) {

var $836bba78bf9caa3e$var$origCwd = process.cwd;
var $836bba78bf9caa3e$var$cwd = null;
var $836bba78bf9caa3e$var$platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
    if (!$836bba78bf9caa3e$var$cwd) $836bba78bf9caa3e$var$cwd = $836bba78bf9caa3e$var$origCwd.call(process);
    return $836bba78bf9caa3e$var$cwd;
};
try {
    process.cwd();
} catch (er) {}
var $836bba78bf9caa3e$var$chdir = process.chdir;
process.chdir = function(d) {
    $836bba78bf9caa3e$var$cwd = null;
    $836bba78bf9caa3e$var$chdir.call(process, d);
};
module.exports = $836bba78bf9caa3e$var$patch;
function $836bba78bf9caa3e$var$patch(fs) {
    // (re-)implement some things that are known busted or missing.
    // lchmod, broken prior to 0.6.2
    // back-port the fix here.
    if ($jobL2$constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) patchLchmod(fs);
    // lutimes implementation, or no-op
    if (!fs.lutimes) patchLutimes(fs);
    // https://github.com/isaacs/node-graceful-fs/issues/4
    // Chown should not fail on einval or eperm if non-root.
    // It should not fail on enosys ever, as this just indicates
    // that a fs doesn't support the intended operation.
    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync);
    // if lchmod/lchown do not exist, then make them no-ops
    if (!fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {};
    }
    if (!fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {};
    }
    // on Windows, A/V software can lock the directory, causing this
    // to fail with an EACCES or EPERM if the directory contains newly
    // created files.  Try again on failure, for up to 60 seconds.
    // Set the timeout this long because some Windows Anti-Virus, such as Parity
    // bit9, may lock files for up to a minute, causing npm package install
    // failures. Also, take care to yield the scheduler. Windows scheduling gives
    // CPU to a busy looping process, which can cause the program causing the lock
    // contention to be starved of CPU by node, so the contention doesn't resolve.
    if ($836bba78bf9caa3e$var$platform === "win32") fs.rename = function(fs$rename) {
        return function(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
                    setTimeout(function() {
                        fs.stat(to, function(stater, st) {
                            if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);
                            else cb(er);
                        });
                    }, backoff);
                    if (backoff < 100) backoff += 10;
                    return;
                }
                if (cb) cb(er);
            });
        };
    }(fs.rename);
    // if read() returns EAGAIN, then just try it again.
    fs.read = function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === 'function') {
                var eagCounter = 0;
                callback = function(er, _, __) {
                    if (er && er.code === 'EAGAIN' && eagCounter < 10) {
                        eagCounter++;
                        return fs$read.call(fs, fd, buffer, offset, length, position, callback);
                    }
                    callback_.apply(this, arguments);
                };
            }
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        // This ensures `util.promisify` works as it does for native `fs.read`.
        read.__proto__ = fs$read;
        return read;
    }(fs.read);
    fs.readSync = function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while(true)try {
                return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
                if (er.code === 'EAGAIN' && eagCounter < 10) {
                    eagCounter++;
                    continue;
                }
                throw er;
            }
        };
    }(fs.readSync);
    function patchLchmod(fs) {
        fs.lchmod = function(path, mode, callback) {
            fs.open(path, $jobL2$constants.O_WRONLY | $jobL2$constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                    if (callback) callback(err);
                    return;
                }
                // prefer to return the chmod error, if one occurs,
                // but still try to close, and report closing errors if they occur.
                fs.fchmod(fd, mode, function(err) {
                    fs.close(fd, function(err2) {
                        if (callback) callback(err || err2);
                    });
                });
            });
        };
        fs.lchmodSync = function(path, mode) {
            var fd = fs.openSync(path, $jobL2$constants.O_WRONLY | $jobL2$constants.O_SYMLINK, mode);
            // prefer to return the chmod error, if one occurs,
            // but still try to close, and report closing errors if they occur.
            var threw = true;
            var ret;
            try {
                ret = fs.fchmodSync(fd, mode);
                threw = false;
            } finally{
                if (threw) try {
                    fs.closeSync(fd);
                } catch (er) {}
                else fs.closeSync(fd);
            }
            return ret;
        };
    }
    function patchLutimes(fs) {
        if ($jobL2$constants.hasOwnProperty("O_SYMLINK")) {
            fs.lutimes = function(path, at, mt, cb) {
                fs.open(path, $jobL2$constants.O_SYMLINK, function(er, fd) {
                    if (er) {
                        if (cb) cb(er);
                        return;
                    }
                    fs.futimes(fd, at, mt, function(er) {
                        fs.close(fd, function(er2) {
                            if (cb) cb(er || er2);
                        });
                    });
                });
            };
            fs.lutimesSync = function(path, at, mt) {
                var fd = fs.openSync(path, $jobL2$constants.O_SYMLINK);
                var ret;
                var threw = true;
                try {
                    ret = fs.futimesSync(fd, at, mt);
                    threw = false;
                } finally{
                    if (threw) try {
                        fs.closeSync(fd);
                    } catch (er) {}
                    else fs.closeSync(fd);
                }
                return ret;
            };
        } else {
            fs.lutimes = function(_a, _b, _c, cb) {
                if (cb) process.nextTick(cb);
            };
            fs.lutimesSync = function() {};
        }
    }
    function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
            return orig.call(fs, target, mode, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
            try {
                return orig.call(fs, target, mode);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
            return orig.call(fs, target, uid, gid, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
            try {
                return orig.call(fs, target, uid, gid);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function statFix(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options, cb) {
            if (typeof options === 'function') {
                cb = options;
                options = null;
            }
            function callback(er, stats) {
                if (stats) {
                    if (stats.uid < 0) stats.uid += 0x100000000;
                    if (stats.gid < 0) stats.gid += 0x100000000;
                }
                if (cb) cb.apply(this, arguments);
            }
            return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
    }
    function statFixSync(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options) {
            var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
            if (stats.uid < 0) stats.uid += 0x100000000;
            if (stats.gid < 0) stats.gid += 0x100000000;
            return stats;
        };
    }
    // ENOSYS means that the fs doesn't support the op. Just ignore
    // that, because it doesn't matter.
    //
    // if there's no getuid, or if getuid() is something other
    // than 0, and the error is EINVAL or EPERM, then just ignore
    // it.
    //
    // This specific case is a silent failure in cp, install, tar,
    // and most other unix tools that manage permissions.
    //
    // When running as root, or if other types of errors are
    // encountered, then it's strict.
    function chownErOk(er) {
        if (!er) return true;
        if (er.code === "ENOSYS") return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM") return true;
        }
        return false;
    }
}

});

parcelRegister("lRgF2", function(module, exports) {

var $fe9b78b9b734160c$require$Stream = $jobL2$stream.Stream;
module.exports = $fe9b78b9b734160c$var$legacy;
function $fe9b78b9b734160c$var$legacy(fs) {
    return {
        ReadStream: ReadStream,
        WriteStream: WriteStream
    };
    function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        $fe9b78b9b734160c$require$Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = 'r';
        this.mode = 438; /*=0666*/ 
        this.bufferSize = 65536;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== undefined) {
            if ('number' !== typeof this.start) throw TypeError('start must be a Number');
            if (this.end === undefined) this.end = Infinity;
            else if ('number' !== typeof this.end) throw TypeError('end must be a Number');
            if (this.start > this.end) throw new Error('start must be <= end');
            this.pos = this.start;
        }
        if (this.fd !== null) {
            process.nextTick(function() {
                self._read();
            });
            return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
                self.emit('error', err);
                self.readable = false;
                return;
            }
            self.fd = fd;
            self.emit('open', fd);
            self._read();
        });
    }
    function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        $fe9b78b9b734160c$require$Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = 'w';
        this.encoding = 'binary';
        this.mode = 438; /*=0666*/ 
        this.bytesWritten = 0;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.start !== undefined) {
            if ('number' !== typeof this.start) throw TypeError('start must be a Number');
            if (this.start < 0) throw new Error('start must be >= zero');
            this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
            this._open = fs.open;
            this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                undefined
            ]);
            this.flush();
        }
    }
}

});

parcelRegister("dbhJh", function(module, exports) {
'use strict';
module.exports = $998a0e23bffacf53$var$clone;
function $998a0e23bffacf53$var$clone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Object) var copy = {
        __proto__: obj.__proto__
    };
    else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
}

});



parcelRegister("11Sqo", function(module, exports) {
'use strict';

module.exports = {
    copySync: (parcelRequire("gNYOP"))
};

});
parcelRegister("gNYOP", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $ggBMC = parcelRequire("ggBMC");
var $c3c06647232b7ef8$require$mkdirpSync = $ggBMC.mkdirsSync;

var $fa7pz = parcelRequire("fa7pz");
var $c3c06647232b7ef8$require$utimesSync = $fa7pz.utimesMillisSync;

var $4nJK9 = parcelRequire("4nJK9");
function $c3c06647232b7ef8$var$copySync(src, dest, opts) {
    if (typeof opts === 'function') opts = {
        filter: opts
    };
    opts = opts || {};
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
    ;
    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber
    ;
    // Warn about using preserveTimestamps on 32-bit node
    if (opts.preserveTimestamps && process.arch === 'ia32') console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    const { srcStat: srcStat, destStat: destStat } = $4nJK9.checkPathsSync(src, dest, 'copy');
    $4nJK9.checkParentPathsSync(src, srcStat, dest, 'copy');
    return $c3c06647232b7ef8$var$handleFilterAndCopy(destStat, src, dest, opts);
}
function $c3c06647232b7ef8$var$handleFilterAndCopy(destStat, src, dest, opts) {
    if (opts.filter && !opts.filter(src, dest)) return;
    const destParent = $jobL2$path.dirname(dest);
    if (!$dwXXI.existsSync(destParent)) $c3c06647232b7ef8$require$mkdirpSync(destParent);
    return $c3c06647232b7ef8$var$startCopy(destStat, src, dest, opts);
}
function $c3c06647232b7ef8$var$startCopy(destStat, src, dest, opts) {
    if (opts.filter && !opts.filter(src, dest)) return;
    return $c3c06647232b7ef8$var$getStats(destStat, src, dest, opts);
}
function $c3c06647232b7ef8$var$getStats(destStat, src, dest, opts) {
    const statSync = opts.dereference ? $dwXXI.statSync : $dwXXI.lstatSync;
    const srcStat = statSync(src);
    if (srcStat.isDirectory()) return $c3c06647232b7ef8$var$onDir(srcStat, destStat, src, dest, opts);
    else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return $c3c06647232b7ef8$var$onFile(srcStat, destStat, src, dest, opts);
    else if (srcStat.isSymbolicLink()) return $c3c06647232b7ef8$var$onLink(destStat, src, dest, opts);
}
function $c3c06647232b7ef8$var$onFile(srcStat, destStat, src, dest, opts) {
    if (!destStat) return $c3c06647232b7ef8$var$copyFile(srcStat, src, dest, opts);
    return $c3c06647232b7ef8$var$mayCopyFile(srcStat, src, dest, opts);
}
function $c3c06647232b7ef8$var$mayCopyFile(srcStat, src, dest, opts) {
    if (opts.overwrite) {
        $dwXXI.unlinkSync(dest);
        return $c3c06647232b7ef8$var$copyFile(srcStat, src, dest, opts);
    } else if (opts.errorOnExist) throw new Error(`'${dest}' already exists`);
}
function $c3c06647232b7ef8$var$copyFile(srcStat, src, dest, opts) {
    if (typeof $dwXXI.copyFileSync === 'function') {
        $dwXXI.copyFileSync(src, dest);
        $dwXXI.chmodSync(dest, srcStat.mode);
        if (opts.preserveTimestamps) return $c3c06647232b7ef8$require$utimesSync(dest, srcStat.atime, srcStat.mtime);
        return;
    }
    return $c3c06647232b7ef8$var$copyFileFallback(srcStat, src, dest, opts);
}

function $c3c06647232b7ef8$var$copyFileFallback(srcStat, src, dest, opts) {
    const BUF_LENGTH = 65536;
    const _buff = (parcelRequire("eMWVk"))(BUF_LENGTH);
    const fdr = $dwXXI.openSync(src, 'r');
    const fdw = $dwXXI.openSync(dest, 'w', srcStat.mode);
    let pos = 0;
    while(pos < srcStat.size){
        const bytesRead = $dwXXI.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
        $dwXXI.writeSync(fdw, _buff, 0, bytesRead);
        pos += bytesRead;
    }
    if (opts.preserveTimestamps) $dwXXI.futimesSync(fdw, srcStat.atime, srcStat.mtime);
    $dwXXI.closeSync(fdr);
    $dwXXI.closeSync(fdw);
}
function $c3c06647232b7ef8$var$onDir(srcStat, destStat, src, dest, opts) {
    if (!destStat) return $c3c06647232b7ef8$var$mkDirAndCopy(srcStat, src, dest, opts);
    if (destStat && !destStat.isDirectory()) throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
    return $c3c06647232b7ef8$var$copyDir(src, dest, opts);
}
function $c3c06647232b7ef8$var$mkDirAndCopy(srcStat, src, dest, opts) {
    $dwXXI.mkdirSync(dest);
    $c3c06647232b7ef8$var$copyDir(src, dest, opts);
    return $dwXXI.chmodSync(dest, srcStat.mode);
}
function $c3c06647232b7ef8$var$copyDir(src, dest, opts) {
    $dwXXI.readdirSync(src).forEach((item)=>$c3c06647232b7ef8$var$copyDirItem(item, src, dest, opts));
}
function $c3c06647232b7ef8$var$copyDirItem(item, src, dest, opts) {
    const srcItem = $jobL2$path.join(src, item);
    const destItem = $jobL2$path.join(dest, item);
    const { destStat: destStat } = $4nJK9.checkPathsSync(srcItem, destItem, 'copy');
    return $c3c06647232b7ef8$var$startCopy(destStat, srcItem, destItem, opts);
}
function $c3c06647232b7ef8$var$onLink(destStat, src, dest, opts) {
    let resolvedSrc = $dwXXI.readlinkSync(src);
    if (opts.dereference) resolvedSrc = $jobL2$path.resolve(process.cwd(), resolvedSrc);
    if (!destStat) return $dwXXI.symlinkSync(resolvedSrc, dest);
    else {
        let resolvedDest;
        try {
            resolvedDest = $dwXXI.readlinkSync(dest);
        } catch (err) {
            // dest exists and is a regular file or directory,
            // Windows may throw UNKNOWN error. If dest already exists,
            // fs throws error anyway, so no need to guard against it here.
            if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return $dwXXI.symlinkSync(resolvedSrc, dest);
            throw err;
        }
        if (opts.dereference) resolvedDest = $jobL2$path.resolve(process.cwd(), resolvedDest);
        if ($4nJK9.isSrcSubdir(resolvedSrc, resolvedDest)) throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
        // prevent copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        if ($dwXXI.statSync(dest).isDirectory() && $4nJK9.isSrcSubdir(resolvedDest, resolvedSrc)) throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
        return $c3c06647232b7ef8$var$copyLink(resolvedSrc, dest);
    }
}
function $c3c06647232b7ef8$var$copyLink(resolvedSrc, dest) {
    $dwXXI.unlinkSync(dest);
    return $dwXXI.symlinkSync(resolvedSrc, dest);
}
module.exports = $c3c06647232b7ef8$var$copySync;

});
parcelRegister("ggBMC", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $bd7b72eae73ee776$require$u = $1OvF7.fromCallback;

const $bd7b72eae73ee776$var$mkdirs = $bd7b72eae73ee776$require$u((parcelRequire("c7925")));

var $hv3kj = parcelRequire("hv3kj");
module.exports = {
    mkdirs: $bd7b72eae73ee776$var$mkdirs,
    mkdirsSync: $hv3kj,
    // alias
    mkdirp: $bd7b72eae73ee776$var$mkdirs,
    mkdirpSync: $hv3kj,
    ensureDir: $bd7b72eae73ee776$var$mkdirs,
    ensureDirSync: $hv3kj
};

});
parcelRegister("c7925", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $hAf20 = parcelRequire("hAf20");
var $8d1d25329e0ea70a$require$invalidWin32Path = $hAf20.invalidWin32Path;
const $8d1d25329e0ea70a$var$o777 = parseInt('0777', 8);
function $8d1d25329e0ea70a$var$mkdirs(p, opts, callback, made) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    } else if (!opts || typeof opts !== 'object') opts = {
        mode: opts
    };
    if (process.platform === 'win32' && $8d1d25329e0ea70a$require$invalidWin32Path(p)) {
        const errInval = new Error(p + ' contains invalid WIN32 path characters.');
        errInval.code = 'EINVAL';
        return callback(errInval);
    }
    let mode = opts.mode;
    const xfs = opts.fs || $dwXXI;
    if (mode === undefined) mode = $8d1d25329e0ea70a$var$o777 & ~process.umask();
    if (!made) made = null;
    callback = callback || function() {};
    p = $jobL2$path.resolve(p);
    xfs.mkdir(p, mode, (er)=>{
        if (!er) {
            made = made || p;
            return callback(null, made);
        }
        switch(er.code){
            case 'ENOENT':
                if ($jobL2$path.dirname(p) === p) return callback(er);
                $8d1d25329e0ea70a$var$mkdirs($jobL2$path.dirname(p), opts, (er, made)=>{
                    if (er) callback(er, made);
                    else $8d1d25329e0ea70a$var$mkdirs(p, opts, callback, made);
                });
                break;
            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, (er2, stat)=>{
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) callback(er, made);
                    else callback(null, made);
                });
                break;
        }
    });
}
module.exports = $8d1d25329e0ea70a$var$mkdirs;

});
parcelRegister("hAf20", function(module, exports) {
'use strict';

// get drive on windows
function $ccd1755a305137a3$var$getRootPath(p) {
    p = $jobL2$path.normalize($jobL2$path.resolve(p)).split($jobL2$path.sep);
    if (p.length > 0) return p[0];
    return null;
}
// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const $ccd1755a305137a3$var$INVALID_PATH_CHARS = /[<>:"|?*]/;
function $ccd1755a305137a3$var$invalidWin32Path(p) {
    const rp = $ccd1755a305137a3$var$getRootPath(p);
    p = p.replace(rp, '');
    return $ccd1755a305137a3$var$INVALID_PATH_CHARS.test(p);
}
module.exports = {
    getRootPath: $ccd1755a305137a3$var$getRootPath,
    invalidWin32Path: $ccd1755a305137a3$var$invalidWin32Path
};

});


parcelRegister("hv3kj", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $hAf20 = parcelRequire("hAf20");
var $cbd7e98a386fdc78$require$invalidWin32Path = $hAf20.invalidWin32Path;
const $cbd7e98a386fdc78$var$o777 = parseInt('0777', 8);
function $cbd7e98a386fdc78$var$mkdirsSync(p, opts, made) {
    if (!opts || typeof opts !== 'object') opts = {
        mode: opts
    };
    let mode = opts.mode;
    const xfs = opts.fs || $dwXXI;
    if (process.platform === 'win32' && $cbd7e98a386fdc78$require$invalidWin32Path(p)) {
        const errInval = new Error(p + ' contains invalid WIN32 path characters.');
        errInval.code = 'EINVAL';
        throw errInval;
    }
    if (mode === undefined) mode = $cbd7e98a386fdc78$var$o777 & ~process.umask();
    if (!made) made = null;
    p = $jobL2$path.resolve(p);
    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    } catch (err0) {
        if (err0.code === 'ENOENT') {
            if ($jobL2$path.dirname(p) === p) throw err0;
            made = $cbd7e98a386fdc78$var$mkdirsSync($jobL2$path.dirname(p), opts, made);
            $cbd7e98a386fdc78$var$mkdirsSync(p, opts, made);
        } else {
            // In the case of any other error, just see if there's a dir there
            // already. If so, then hooray!  If not, then something is borked.
            let stat;
            try {
                stat = xfs.statSync(p);
            } catch (err1) {
                throw err0;
            }
            if (!stat.isDirectory()) throw err0;
        }
    }
    return made;
}
module.exports = $cbd7e98a386fdc78$var$mkdirsSync;

});


parcelRegister("fa7pz", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function $b09d89ee1880cd89$var$hasMillisResSync() {
    let tmpfile = $jobL2$path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
    tmpfile = $jobL2$path.join($jobL2$os.tmpdir(), tmpfile);
    // 550 millis past UNIX epoch
    const d = new Date(1435410243862);
    $dwXXI.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141');
    const fd = $dwXXI.openSync(tmpfile, 'r+');
    $dwXXI.futimesSync(fd, d, d);
    $dwXXI.closeSync(fd);
    return $dwXXI.statSync(tmpfile).mtime > 1435410243000;
}
function $b09d89ee1880cd89$var$hasMillisRes(callback) {
    let tmpfile = $jobL2$path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
    tmpfile = $jobL2$path.join($jobL2$os.tmpdir(), tmpfile);
    // 550 millis past UNIX epoch
    const d = new Date(1435410243862);
    $dwXXI.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', (err)=>{
        if (err) return callback(err);
        $dwXXI.open(tmpfile, 'r+', (err, fd)=>{
            if (err) return callback(err);
            $dwXXI.futimes(fd, d, d, (err)=>{
                if (err) return callback(err);
                $dwXXI.close(fd, (err)=>{
                    if (err) return callback(err);
                    $dwXXI.stat(tmpfile, (err, stats)=>{
                        if (err) return callback(err);
                        callback(null, stats.mtime > 1435410243000);
                    });
                });
            });
        });
    });
}
function $b09d89ee1880cd89$var$timeRemoveMillis(timestamp) {
    if (typeof timestamp === 'number') return Math.floor(timestamp / 1000) * 1000;
    else if (timestamp instanceof Date) return new Date(Math.floor(timestamp.getTime() / 1000) * 1000);
    else throw new Error('fs-extra: timeRemoveMillis() unknown parameter type');
}
function $b09d89ee1880cd89$var$utimesMillis(path, atime, mtime, callback) {
    // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
    $dwXXI.open(path, 'r+', (err, fd)=>{
        if (err) return callback(err);
        $dwXXI.futimes(fd, atime, mtime, (futimesErr)=>{
            $dwXXI.close(fd, (closeErr)=>{
                if (callback) callback(futimesErr || closeErr);
            });
        });
    });
}
function $b09d89ee1880cd89$var$utimesMillisSync(path, atime, mtime) {
    const fd = $dwXXI.openSync(path, 'r+');
    $dwXXI.futimesSync(fd, atime, mtime);
    return $dwXXI.closeSync(fd);
}
module.exports = {
    hasMillisRes: $b09d89ee1880cd89$var$hasMillisRes,
    hasMillisResSync: $b09d89ee1880cd89$var$hasMillisResSync,
    timeRemoveMillis: $b09d89ee1880cd89$var$timeRemoveMillis,
    utimesMillis: $b09d89ee1880cd89$var$utimesMillis,
    utimesMillisSync: $b09d89ee1880cd89$var$utimesMillisSync
};

});

parcelRegister("4nJK9", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");

const $330ccb199c32bf32$var$NODE_VERSION_MAJOR_WITH_BIGINT = 10;
const $330ccb199c32bf32$var$NODE_VERSION_MINOR_WITH_BIGINT = 5;
const $330ccb199c32bf32$var$NODE_VERSION_PATCH_WITH_BIGINT = 0;
const $330ccb199c32bf32$var$nodeVersion = process.versions.node.split('.');
const $330ccb199c32bf32$var$nodeVersionMajor = Number.parseInt($330ccb199c32bf32$var$nodeVersion[0], 10);
const $330ccb199c32bf32$var$nodeVersionMinor = Number.parseInt($330ccb199c32bf32$var$nodeVersion[1], 10);
const $330ccb199c32bf32$var$nodeVersionPatch = Number.parseInt($330ccb199c32bf32$var$nodeVersion[2], 10);
function $330ccb199c32bf32$var$nodeSupportsBigInt() {
    if ($330ccb199c32bf32$var$nodeVersionMajor > $330ccb199c32bf32$var$NODE_VERSION_MAJOR_WITH_BIGINT) return true;
    else if ($330ccb199c32bf32$var$nodeVersionMajor === $330ccb199c32bf32$var$NODE_VERSION_MAJOR_WITH_BIGINT) {
        if ($330ccb199c32bf32$var$nodeVersionMinor > $330ccb199c32bf32$var$NODE_VERSION_MINOR_WITH_BIGINT) return true;
        else if ($330ccb199c32bf32$var$nodeVersionMinor === $330ccb199c32bf32$var$NODE_VERSION_MINOR_WITH_BIGINT) {
            if ($330ccb199c32bf32$var$nodeVersionPatch >= $330ccb199c32bf32$var$NODE_VERSION_PATCH_WITH_BIGINT) return true;
        }
    }
    return false;
}
function $330ccb199c32bf32$var$getStats(src, dest, cb) {
    if ($330ccb199c32bf32$var$nodeSupportsBigInt()) $dwXXI.stat(src, {
        bigint: true
    }, (err, srcStat)=>{
        if (err) return cb(err);
        $dwXXI.stat(dest, {
            bigint: true
        }, (err, destStat)=>{
            if (err) {
                if (err.code === 'ENOENT') return cb(null, {
                    srcStat: srcStat,
                    destStat: null
                });
                return cb(err);
            }
            return cb(null, {
                srcStat: srcStat,
                destStat: destStat
            });
        });
    });
    else $dwXXI.stat(src, (err, srcStat)=>{
        if (err) return cb(err);
        $dwXXI.stat(dest, (err, destStat)=>{
            if (err) {
                if (err.code === 'ENOENT') return cb(null, {
                    srcStat: srcStat,
                    destStat: null
                });
                return cb(err);
            }
            return cb(null, {
                srcStat: srcStat,
                destStat: destStat
            });
        });
    });
}
function $330ccb199c32bf32$var$getStatsSync(src, dest) {
    let srcStat, destStat;
    if ($330ccb199c32bf32$var$nodeSupportsBigInt()) srcStat = $dwXXI.statSync(src, {
        bigint: true
    });
    else srcStat = $dwXXI.statSync(src);
    try {
        if ($330ccb199c32bf32$var$nodeSupportsBigInt()) destStat = $dwXXI.statSync(dest, {
            bigint: true
        });
        else destStat = $dwXXI.statSync(dest);
    } catch (err) {
        if (err.code === 'ENOENT') return {
            srcStat: srcStat,
            destStat: null
        };
        throw err;
    }
    return {
        srcStat: srcStat,
        destStat: destStat
    };
}
function $330ccb199c32bf32$var$checkPaths(src, dest, funcName, cb) {
    $330ccb199c32bf32$var$getStats(src, dest, (err, stats)=>{
        if (err) return cb(err);
        const { srcStat: srcStat, destStat: destStat } = stats;
        if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error('Source and destination must not be the same.'));
        if (srcStat.isDirectory() && $330ccb199c32bf32$var$isSrcSubdir(src, dest)) return cb(new Error($330ccb199c32bf32$var$errMsg(src, dest, funcName)));
        return cb(null, {
            srcStat: srcStat,
            destStat: destStat
        });
    });
}
function $330ccb199c32bf32$var$checkPathsSync(src, dest, funcName) {
    const { srcStat: srcStat, destStat: destStat } = $330ccb199c32bf32$var$getStatsSync(src, dest);
    if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) throw new Error('Source and destination must not be the same.');
    if (srcStat.isDirectory() && $330ccb199c32bf32$var$isSrcSubdir(src, dest)) throw new Error($330ccb199c32bf32$var$errMsg(src, dest, funcName));
    return {
        srcStat: srcStat,
        destStat: destStat
    };
}
// recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.
function $330ccb199c32bf32$var$checkParentPaths(src, srcStat, dest, funcName, cb) {
    const srcParent = $jobL2$path.resolve($jobL2$path.dirname(src));
    const destParent = $jobL2$path.resolve($jobL2$path.dirname(dest));
    if (destParent === srcParent || destParent === $jobL2$path.parse(destParent).root) return cb();
    if ($330ccb199c32bf32$var$nodeSupportsBigInt()) $dwXXI.stat(destParent, {
        bigint: true
    }, (err, destStat)=>{
        if (err) {
            if (err.code === 'ENOENT') return cb();
            return cb(err);
        }
        if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error($330ccb199c32bf32$var$errMsg(src, dest, funcName)));
        return $330ccb199c32bf32$var$checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
    else $dwXXI.stat(destParent, (err, destStat)=>{
        if (err) {
            if (err.code === 'ENOENT') return cb();
            return cb(err);
        }
        if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error($330ccb199c32bf32$var$errMsg(src, dest, funcName)));
        return $330ccb199c32bf32$var$checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
}
function $330ccb199c32bf32$var$checkParentPathsSync(src, srcStat, dest, funcName) {
    const srcParent = $jobL2$path.resolve($jobL2$path.dirname(src));
    const destParent = $jobL2$path.resolve($jobL2$path.dirname(dest));
    if (destParent === srcParent || destParent === $jobL2$path.parse(destParent).root) return;
    let destStat;
    try {
        if ($330ccb199c32bf32$var$nodeSupportsBigInt()) destStat = $dwXXI.statSync(destParent, {
            bigint: true
        });
        else destStat = $dwXXI.statSync(destParent);
    } catch (err) {
        if (err.code === 'ENOENT') return;
        throw err;
    }
    if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) throw new Error($330ccb199c32bf32$var$errMsg(src, dest, funcName));
    return $330ccb199c32bf32$var$checkParentPathsSync(src, srcStat, destParent, funcName);
}
// return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.
function $330ccb199c32bf32$var$isSrcSubdir(src, dest) {
    const srcArr = $jobL2$path.resolve(src).split($jobL2$path.sep).filter((i)=>i);
    const destArr = $jobL2$path.resolve(dest).split($jobL2$path.sep).filter((i)=>i);
    return srcArr.reduce((acc, cur, i)=>acc && destArr[i] === cur, true);
}
function $330ccb199c32bf32$var$errMsg(src, dest, funcName) {
    return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
}
module.exports = {
    checkPaths: $330ccb199c32bf32$var$checkPaths,
    checkPathsSync: $330ccb199c32bf32$var$checkPathsSync,
    checkParentPaths: $330ccb199c32bf32$var$checkParentPaths,
    checkParentPathsSync: $330ccb199c32bf32$var$checkParentPathsSync,
    isSrcSubdir: $330ccb199c32bf32$var$isSrcSubdir
};

});

parcelRegister("eMWVk", function(module, exports) {
'use strict';
/* eslint-disable node/no-deprecated-api */ module.exports = function(size) {
    if (typeof Buffer.allocUnsafe === 'function') try {
        return Buffer.allocUnsafe(size);
    } catch (e) {
        return new Buffer(size);
    }
    return new Buffer(size);
};

});



parcelRegister("8DRY7", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $64abd44c4d7af778$require$u = $1OvF7.fromCallback;

module.exports = {
    copy: $64abd44c4d7af778$require$u((parcelRequire("iCevR")))
};

});
parcelRegister("iCevR", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $ggBMC = parcelRequire("ggBMC");
var $d8d7088b2c13e3a1$require$mkdirp = $ggBMC.mkdirs;

var $eUzTv = parcelRequire("eUzTv");
var $d8d7088b2c13e3a1$require$pathExists = $eUzTv.pathExists;

var $fa7pz = parcelRequire("fa7pz");
var $d8d7088b2c13e3a1$require$utimes = $fa7pz.utimesMillis;

var $4nJK9 = parcelRequire("4nJK9");
function $d8d7088b2c13e3a1$var$copy(src, dest, opts, cb) {
    if (typeof opts === 'function' && !cb) {
        cb = opts;
        opts = {};
    } else if (typeof opts === 'function') opts = {
        filter: opts
    };
    cb = cb || function() {};
    opts = opts || {};
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
    ;
    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber
    ;
    // Warn about using preserveTimestamps on 32-bit node
    if (opts.preserveTimestamps && process.arch === 'ia32') console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    $4nJK9.checkPaths(src, dest, 'copy', (err, stats)=>{
        if (err) return cb(err);
        const { srcStat: srcStat, destStat: destStat } = stats;
        $4nJK9.checkParentPaths(src, srcStat, dest, 'copy', (err)=>{
            if (err) return cb(err);
            if (opts.filter) return $d8d7088b2c13e3a1$var$handleFilter($d8d7088b2c13e3a1$var$checkParentDir, destStat, src, dest, opts, cb);
            return $d8d7088b2c13e3a1$var$checkParentDir(destStat, src, dest, opts, cb);
        });
    });
}
function $d8d7088b2c13e3a1$var$checkParentDir(destStat, src, dest, opts, cb) {
    const destParent = $jobL2$path.dirname(dest);
    $d8d7088b2c13e3a1$require$pathExists(destParent, (err, dirExists)=>{
        if (err) return cb(err);
        if (dirExists) return $d8d7088b2c13e3a1$var$startCopy(destStat, src, dest, opts, cb);
        $d8d7088b2c13e3a1$require$mkdirp(destParent, (err)=>{
            if (err) return cb(err);
            return $d8d7088b2c13e3a1$var$startCopy(destStat, src, dest, opts, cb);
        });
    });
}
function $d8d7088b2c13e3a1$var$handleFilter(onInclude, destStat, src, dest, opts, cb) {
    Promise.resolve(opts.filter(src, dest)).then((include)=>{
        if (include) return onInclude(destStat, src, dest, opts, cb);
        return cb();
    }, (error)=>cb(error));
}
function $d8d7088b2c13e3a1$var$startCopy(destStat, src, dest, opts, cb) {
    if (opts.filter) return $d8d7088b2c13e3a1$var$handleFilter($d8d7088b2c13e3a1$var$getStats, destStat, src, dest, opts, cb);
    return $d8d7088b2c13e3a1$var$getStats(destStat, src, dest, opts, cb);
}
function $d8d7088b2c13e3a1$var$getStats(destStat, src, dest, opts, cb) {
    const stat = opts.dereference ? $dwXXI.stat : $dwXXI.lstat;
    stat(src, (err, srcStat)=>{
        if (err) return cb(err);
        if (srcStat.isDirectory()) return $d8d7088b2c13e3a1$var$onDir(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return $d8d7088b2c13e3a1$var$onFile(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isSymbolicLink()) return $d8d7088b2c13e3a1$var$onLink(destStat, src, dest, opts, cb);
    });
}
function $d8d7088b2c13e3a1$var$onFile(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return $d8d7088b2c13e3a1$var$copyFile(srcStat, src, dest, opts, cb);
    return $d8d7088b2c13e3a1$var$mayCopyFile(srcStat, src, dest, opts, cb);
}
function $d8d7088b2c13e3a1$var$mayCopyFile(srcStat, src, dest, opts, cb) {
    if (opts.overwrite) $dwXXI.unlink(dest, (err)=>{
        if (err) return cb(err);
        return $d8d7088b2c13e3a1$var$copyFile(srcStat, src, dest, opts, cb);
    });
    else if (opts.errorOnExist) return cb(new Error(`'${dest}' already exists`));
    else return cb();
}
function $d8d7088b2c13e3a1$var$copyFile(srcStat, src, dest, opts, cb) {
    if (typeof $dwXXI.copyFile === 'function') return $dwXXI.copyFile(src, dest, (err)=>{
        if (err) return cb(err);
        return $d8d7088b2c13e3a1$var$setDestModeAndTimestamps(srcStat, dest, opts, cb);
    });
    return $d8d7088b2c13e3a1$var$copyFileFallback(srcStat, src, dest, opts, cb);
}
function $d8d7088b2c13e3a1$var$copyFileFallback(srcStat, src, dest, opts, cb) {
    const rs = $dwXXI.createReadStream(src);
    rs.on('error', (err)=>cb(err)).once('open', ()=>{
        const ws = $dwXXI.createWriteStream(dest, {
            mode: srcStat.mode
        });
        ws.on('error', (err)=>cb(err)).on('open', ()=>rs.pipe(ws)).once('close', ()=>$d8d7088b2c13e3a1$var$setDestModeAndTimestamps(srcStat, dest, opts, cb));
    });
}
function $d8d7088b2c13e3a1$var$setDestModeAndTimestamps(srcStat, dest, opts, cb) {
    $dwXXI.chmod(dest, srcStat.mode, (err)=>{
        if (err) return cb(err);
        if (opts.preserveTimestamps) return $d8d7088b2c13e3a1$require$utimes(dest, srcStat.atime, srcStat.mtime, cb);
        return cb();
    });
}
function $d8d7088b2c13e3a1$var$onDir(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return $d8d7088b2c13e3a1$var$mkDirAndCopy(srcStat, src, dest, opts, cb);
    if (destStat && !destStat.isDirectory()) return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
    return $d8d7088b2c13e3a1$var$copyDir(src, dest, opts, cb);
}
function $d8d7088b2c13e3a1$var$mkDirAndCopy(srcStat, src, dest, opts, cb) {
    $dwXXI.mkdir(dest, (err)=>{
        if (err) return cb(err);
        $d8d7088b2c13e3a1$var$copyDir(src, dest, opts, (err)=>{
            if (err) return cb(err);
            return $dwXXI.chmod(dest, srcStat.mode, cb);
        });
    });
}
function $d8d7088b2c13e3a1$var$copyDir(src, dest, opts, cb) {
    $dwXXI.readdir(src, (err, items)=>{
        if (err) return cb(err);
        return $d8d7088b2c13e3a1$var$copyDirItems(items, src, dest, opts, cb);
    });
}
function $d8d7088b2c13e3a1$var$copyDirItems(items, src, dest, opts, cb) {
    const item = items.pop();
    if (!item) return cb();
    return $d8d7088b2c13e3a1$var$copyDirItem(items, item, src, dest, opts, cb);
}
function $d8d7088b2c13e3a1$var$copyDirItem(items, item, src, dest, opts, cb) {
    const srcItem = $jobL2$path.join(src, item);
    const destItem = $jobL2$path.join(dest, item);
    $4nJK9.checkPaths(srcItem, destItem, 'copy', (err, stats)=>{
        if (err) return cb(err);
        const { destStat: destStat } = stats;
        $d8d7088b2c13e3a1$var$startCopy(destStat, srcItem, destItem, opts, (err)=>{
            if (err) return cb(err);
            return $d8d7088b2c13e3a1$var$copyDirItems(items, src, dest, opts, cb);
        });
    });
}
function $d8d7088b2c13e3a1$var$onLink(destStat, src, dest, opts, cb) {
    $dwXXI.readlink(src, (err, resolvedSrc)=>{
        if (err) return cb(err);
        if (opts.dereference) resolvedSrc = $jobL2$path.resolve(process.cwd(), resolvedSrc);
        if (!destStat) return $dwXXI.symlink(resolvedSrc, dest, cb);
        else $dwXXI.readlink(dest, (err, resolvedDest)=>{
            if (err) {
                // dest exists and is a regular file or directory,
                // Windows may throw UNKNOWN error. If dest already exists,
                // fs throws error anyway, so no need to guard against it here.
                if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return $dwXXI.symlink(resolvedSrc, dest, cb);
                return cb(err);
            }
            if (opts.dereference) resolvedDest = $jobL2$path.resolve(process.cwd(), resolvedDest);
            if ($4nJK9.isSrcSubdir(resolvedSrc, resolvedDest)) return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
            // do not copy if src is a subdir of dest since unlinking
            // dest in this case would result in removing src contents
            // and therefore a broken symlink would be created.
            if (destStat.isDirectory() && $4nJK9.isSrcSubdir(resolvedDest, resolvedSrc)) return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
            return $d8d7088b2c13e3a1$var$copyLink(resolvedSrc, dest, cb);
        });
    });
}
function $d8d7088b2c13e3a1$var$copyLink(resolvedSrc, dest, cb) {
    $dwXXI.unlink(dest, (err)=>{
        if (err) return cb(err);
        return $dwXXI.symlink(resolvedSrc, dest, cb);
    });
}
module.exports = $d8d7088b2c13e3a1$var$copy;

});
parcelRegister("eUzTv", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $adb2237ebf719064$require$u = $1OvF7.fromPromise;

var $5QYQ7 = parcelRequire("5QYQ7");
function $adb2237ebf719064$var$pathExists(path) {
    return $5QYQ7.access(path).then(()=>true).catch(()=>false);
}
module.exports = {
    pathExists: $adb2237ebf719064$require$u($adb2237ebf719064$var$pathExists),
    pathExistsSync: $5QYQ7.existsSync
};

});



parcelRegister("beKrj", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $82e50673d6a08877$require$u = $1OvF7.fromCallback;

var $dwXXI = parcelRequire("dwXXI");


var $ggBMC = parcelRequire("ggBMC");

var $0Fcuf = parcelRequire("0Fcuf");
const $82e50673d6a08877$var$emptyDir = $82e50673d6a08877$require$u(function emptyDir(dir, callback) {
    callback = callback || function() {};
    $dwXXI.readdir(dir, (err, items)=>{
        if (err) return $ggBMC.mkdirs(dir, callback);
        items = items.map((item)=>$jobL2$path.join(dir, item));
        deleteItem();
        function deleteItem() {
            const item = items.pop();
            if (!item) return callback();
            $0Fcuf.remove(item, (err)=>{
                if (err) return callback(err);
                deleteItem();
            });
        }
    });
});
function $82e50673d6a08877$var$emptyDirSync(dir) {
    let items;
    try {
        items = $dwXXI.readdirSync(dir);
    } catch (err) {
        return $ggBMC.mkdirsSync(dir);
    }
    items.forEach((item)=>{
        item = $jobL2$path.join(dir, item);
        $0Fcuf.removeSync(item);
    });
}
module.exports = {
    emptyDirSync: $82e50673d6a08877$var$emptyDirSync,
    emptydirSync: $82e50673d6a08877$var$emptyDirSync,
    emptyDir: $82e50673d6a08877$var$emptyDir,
    emptydir: $82e50673d6a08877$var$emptyDir
};

});
parcelRegister("0Fcuf", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $001ff5be3da836a7$require$u = $1OvF7.fromCallback;

var $jLcus = parcelRequire("jLcus");
module.exports = {
    remove: $001ff5be3da836a7$require$u($jLcus),
    removeSync: $jLcus.sync
};

});
parcelRegister("jLcus", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


const $e62c186e3651e014$var$isWindows = process.platform === 'win32';
function $e62c186e3651e014$var$defaults(options) {
    const methods = [
        'unlink',
        'chmod',
        'stat',
        'lstat',
        'rmdir',
        'readdir'
    ];
    methods.forEach((m)=>{
        options[m] = options[m] || $dwXXI[m];
        m = m + 'Sync';
        options[m] = options[m] || $dwXXI[m];
    });
    options.maxBusyTries = options.maxBusyTries || 3;
}
function $e62c186e3651e014$var$rimraf(p, options, cb) {
    let busyTries = 0;
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    $jobL2$assert(p, 'rimraf: missing path');
    $jobL2$assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
    $jobL2$assert.strictEqual(typeof cb, 'function', 'rimraf: callback function required');
    $jobL2$assert(options, 'rimraf: invalid options argument provided');
    $jobL2$assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');
    $e62c186e3651e014$var$defaults(options);
    $e62c186e3651e014$var$rimraf_(p, options, function CB(er) {
        if (er) {
            if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') && busyTries < options.maxBusyTries) {
                busyTries++;
                const time = busyTries * 100;
                // try again, with the same exact callback as this one.
                return setTimeout(()=>$e62c186e3651e014$var$rimraf_(p, options, CB), time);
            }
            // already gone
            if (er.code === 'ENOENT') er = null;
        }
        cb(er);
    });
}
// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function $e62c186e3651e014$var$rimraf_(p, options, cb) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    $jobL2$assert(typeof cb === 'function');
    // sunos lets the root user unlink directories, which is... weird.
    // so we have to lstat here and make sure it's not a dir.
    options.lstat(p, (er, st)=>{
        if (er && er.code === 'ENOENT') return cb(null);
        // Windows can EPERM on stat.  Life is suffering.
        if (er && er.code === 'EPERM' && $e62c186e3651e014$var$isWindows) return $e62c186e3651e014$var$fixWinEPERM(p, options, er, cb);
        if (st && st.isDirectory()) return $e62c186e3651e014$var$rmdir(p, options, er, cb);
        options.unlink(p, (er)=>{
            if (er) {
                if (er.code === 'ENOENT') return cb(null);
                if (er.code === 'EPERM') return $e62c186e3651e014$var$isWindows ? $e62c186e3651e014$var$fixWinEPERM(p, options, er, cb) : $e62c186e3651e014$var$rmdir(p, options, er, cb);
                if (er.code === 'EISDIR') return $e62c186e3651e014$var$rmdir(p, options, er, cb);
            }
            return cb(er);
        });
    });
}
function $e62c186e3651e014$var$fixWinEPERM(p, options, er, cb) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    $jobL2$assert(typeof cb === 'function');
    if (er) $jobL2$assert(er instanceof Error);
    options.chmod(p, 438, (er2)=>{
        if (er2) cb(er2.code === 'ENOENT' ? null : er);
        else options.stat(p, (er3, stats)=>{
            if (er3) cb(er3.code === 'ENOENT' ? null : er);
            else if (stats.isDirectory()) $e62c186e3651e014$var$rmdir(p, options, er, cb);
            else options.unlink(p, cb);
        });
    });
}
function $e62c186e3651e014$var$fixWinEPERMSync(p, options, er) {
    let stats;
    $jobL2$assert(p);
    $jobL2$assert(options);
    if (er) $jobL2$assert(er instanceof Error);
    try {
        options.chmodSync(p, 438);
    } catch (er2) {
        if (er2.code === 'ENOENT') return;
        else throw er;
    }
    try {
        stats = options.statSync(p);
    } catch (er3) {
        if (er3.code === 'ENOENT') return;
        else throw er;
    }
    if (stats.isDirectory()) $e62c186e3651e014$var$rmdirSync(p, options, er);
    else options.unlinkSync(p);
}
function $e62c186e3651e014$var$rmdir(p, options, originalEr, cb) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    if (originalEr) $jobL2$assert(originalEr instanceof Error);
    $jobL2$assert(typeof cb === 'function');
    // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
    // if we guessed wrong, and it's not a directory, then
    // raise the original error.
    options.rmdir(p, (er)=>{
        if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) $e62c186e3651e014$var$rmkids(p, options, cb);
        else if (er && er.code === 'ENOTDIR') cb(originalEr);
        else cb(er);
    });
}
function $e62c186e3651e014$var$rmkids(p, options, cb) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    $jobL2$assert(typeof cb === 'function');
    options.readdir(p, (er, files)=>{
        if (er) return cb(er);
        let n = files.length;
        let errState;
        if (n === 0) return options.rmdir(p, cb);
        files.forEach((f)=>{
            $e62c186e3651e014$var$rimraf($jobL2$path.join(p, f), options, (er)=>{
                if (errState) return;
                if (er) return cb(errState = er);
                if (--n === 0) options.rmdir(p, cb);
            });
        });
    });
}
// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function $e62c186e3651e014$var$rimrafSync(p, options) {
    let st;
    options = options || {};
    $e62c186e3651e014$var$defaults(options);
    $jobL2$assert(p, 'rimraf: missing path');
    $jobL2$assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
    $jobL2$assert(options, 'rimraf: missing options');
    $jobL2$assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');
    try {
        st = options.lstatSync(p);
    } catch (er) {
        if (er.code === 'ENOENT') return;
        // Windows can EPERM on stat.  Life is suffering.
        if (er.code === 'EPERM' && $e62c186e3651e014$var$isWindows) $e62c186e3651e014$var$fixWinEPERMSync(p, options, er);
    }
    try {
        // sunos lets the root user unlink directories, which is... weird.
        if (st && st.isDirectory()) $e62c186e3651e014$var$rmdirSync(p, options, null);
        else options.unlinkSync(p);
    } catch (er) {
        if (er.code === 'ENOENT') return;
        else if (er.code === 'EPERM') return $e62c186e3651e014$var$isWindows ? $e62c186e3651e014$var$fixWinEPERMSync(p, options, er) : $e62c186e3651e014$var$rmdirSync(p, options, er);
        else if (er.code !== 'EISDIR') throw er;
        $e62c186e3651e014$var$rmdirSync(p, options, er);
    }
}
function $e62c186e3651e014$var$rmdirSync(p, options, originalEr) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    if (originalEr) $jobL2$assert(originalEr instanceof Error);
    try {
        options.rmdirSync(p);
    } catch (er) {
        if (er.code === 'ENOTDIR') throw originalEr;
        else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') $e62c186e3651e014$var$rmkidsSync(p, options);
        else if (er.code !== 'ENOENT') throw er;
    }
}
function $e62c186e3651e014$var$rmkidsSync(p, options) {
    $jobL2$assert(p);
    $jobL2$assert(options);
    options.readdirSync(p).forEach((f)=>$e62c186e3651e014$var$rimrafSync($jobL2$path.join(p, f), options));
    if ($e62c186e3651e014$var$isWindows) {
        // We only end up here once we got ENOTEMPTY at least once, and
        // at this point, we are guaranteed to have removed all the kids.
        // So, we know that it won't be ENOENT or ENOTDIR or anything else.
        // try really hard to delete stuff on windows, because it has a
        // PROFOUNDLY annoying habit of not closing handles promptly when
        // files are deleted, resulting in spurious ENOTEMPTY errors.
        const startTime = Date.now();
        do try {
            const ret = options.rmdirSync(p, options);
            return ret;
        } catch (er) {}
        while (Date.now() - startTime < 500); // give up after 500ms
    } else {
        const ret = options.rmdirSync(p, options);
        return ret;
    }
}
module.exports = $e62c186e3651e014$var$rimraf;
$e62c186e3651e014$var$rimraf.sync = $e62c186e3651e014$var$rimrafSync;

});



parcelRegister("5cuhD", function(module, exports) {
'use strict';

var $7NOzs = parcelRequire("7NOzs");

var $gc6mj = parcelRequire("gc6mj");

var $dFR0m = parcelRequire("dFR0m");
module.exports = {
    // file
    createFile: $7NOzs.createFile,
    createFileSync: $7NOzs.createFileSync,
    ensureFile: $7NOzs.createFile,
    ensureFileSync: $7NOzs.createFileSync,
    // link
    createLink: $gc6mj.createLink,
    createLinkSync: $gc6mj.createLinkSync,
    ensureLink: $gc6mj.createLink,
    ensureLinkSync: $gc6mj.createLinkSync,
    // symlink
    createSymlink: $dFR0m.createSymlink,
    createSymlinkSync: $dFR0m.createSymlinkSync,
    ensureSymlink: $dFR0m.createSymlink,
    ensureSymlinkSync: $dFR0m.createSymlinkSync
};

});
parcelRegister("7NOzs", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $5ae456590a9590e6$require$u = $1OvF7.fromCallback;


var $dwXXI = parcelRequire("dwXXI");

var $ggBMC = parcelRequire("ggBMC");

var $eUzTv = parcelRequire("eUzTv");
var $5ae456590a9590e6$require$pathExists = $eUzTv.pathExists;
function $5ae456590a9590e6$var$createFile(file, callback) {
    function makeFile() {
        $dwXXI.writeFile(file, '', (err)=>{
            if (err) return callback(err);
            callback();
        });
    }
    $dwXXI.stat(file, (err, stats)=>{
        if (!err && stats.isFile()) return callback();
        const dir = $jobL2$path.dirname(file);
        $5ae456590a9590e6$require$pathExists(dir, (err, dirExists)=>{
            if (err) return callback(err);
            if (dirExists) return makeFile();
            $ggBMC.mkdirs(dir, (err)=>{
                if (err) return callback(err);
                makeFile();
            });
        });
    });
}
function $5ae456590a9590e6$var$createFileSync(file) {
    let stats;
    try {
        stats = $dwXXI.statSync(file);
    } catch (e) {}
    if (stats && stats.isFile()) return;
    const dir = $jobL2$path.dirname(file);
    if (!$dwXXI.existsSync(dir)) $ggBMC.mkdirsSync(dir);
    $dwXXI.writeFileSync(file, '');
}
module.exports = {
    createFile: $5ae456590a9590e6$require$u($5ae456590a9590e6$var$createFile),
    createFileSync: $5ae456590a9590e6$var$createFileSync
};

});

parcelRegister("gc6mj", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $bca2b30d523673df$require$u = $1OvF7.fromCallback;


var $dwXXI = parcelRequire("dwXXI");

var $ggBMC = parcelRequire("ggBMC");

var $eUzTv = parcelRequire("eUzTv");
var $bca2b30d523673df$require$pathExists = $eUzTv.pathExists;
function $bca2b30d523673df$var$createLink(srcpath, dstpath, callback) {
    function makeLink(srcpath, dstpath) {
        $dwXXI.link(srcpath, dstpath, (err)=>{
            if (err) return callback(err);
            callback(null);
        });
    }
    $bca2b30d523673df$require$pathExists(dstpath, (err, destinationExists)=>{
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        $dwXXI.lstat(srcpath, (err)=>{
            if (err) {
                err.message = err.message.replace('lstat', 'ensureLink');
                return callback(err);
            }
            const dir = $jobL2$path.dirname(dstpath);
            $bca2b30d523673df$require$pathExists(dir, (err, dirExists)=>{
                if (err) return callback(err);
                if (dirExists) return makeLink(srcpath, dstpath);
                $ggBMC.mkdirs(dir, (err)=>{
                    if (err) return callback(err);
                    makeLink(srcpath, dstpath);
                });
            });
        });
    });
}
function $bca2b30d523673df$var$createLinkSync(srcpath, dstpath) {
    const destinationExists = $dwXXI.existsSync(dstpath);
    if (destinationExists) return undefined;
    try {
        $dwXXI.lstatSync(srcpath);
    } catch (err) {
        err.message = err.message.replace('lstat', 'ensureLink');
        throw err;
    }
    const dir = $jobL2$path.dirname(dstpath);
    const dirExists = $dwXXI.existsSync(dir);
    if (dirExists) return $dwXXI.linkSync(srcpath, dstpath);
    $ggBMC.mkdirsSync(dir);
    return $dwXXI.linkSync(srcpath, dstpath);
}
module.exports = {
    createLink: $bca2b30d523673df$require$u($bca2b30d523673df$var$createLink),
    createLinkSync: $bca2b30d523673df$var$createLinkSync
};

});

parcelRegister("dFR0m", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $9f48385ab13c5f63$require$u = $1OvF7.fromCallback;


var $dwXXI = parcelRequire("dwXXI");

var $ggBMC = parcelRequire("ggBMC");
const $9f48385ab13c5f63$var$mkdirs = $ggBMC.mkdirs;
const $9f48385ab13c5f63$var$mkdirsSync = $ggBMC.mkdirsSync;

var $efiL0 = parcelRequire("efiL0");
const $9f48385ab13c5f63$var$symlinkPaths = $efiL0.symlinkPaths;
const $9f48385ab13c5f63$var$symlinkPathsSync = $efiL0.symlinkPathsSync;

var $amHrN = parcelRequire("amHrN");
const $9f48385ab13c5f63$var$symlinkType = $amHrN.symlinkType;
const $9f48385ab13c5f63$var$symlinkTypeSync = $amHrN.symlinkTypeSync;

var $eUzTv = parcelRequire("eUzTv");
var $9f48385ab13c5f63$require$pathExists = $eUzTv.pathExists;
function $9f48385ab13c5f63$var$createSymlink(srcpath, dstpath, type, callback) {
    callback = typeof type === 'function' ? type : callback;
    type = typeof type === 'function' ? false : type;
    $9f48385ab13c5f63$require$pathExists(dstpath, (err, destinationExists)=>{
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        $9f48385ab13c5f63$var$symlinkPaths(srcpath, dstpath, (err, relative)=>{
            if (err) return callback(err);
            srcpath = relative.toDst;
            $9f48385ab13c5f63$var$symlinkType(relative.toCwd, type, (err, type)=>{
                if (err) return callback(err);
                const dir = $jobL2$path.dirname(dstpath);
                $9f48385ab13c5f63$require$pathExists(dir, (err, dirExists)=>{
                    if (err) return callback(err);
                    if (dirExists) return $dwXXI.symlink(srcpath, dstpath, type, callback);
                    $9f48385ab13c5f63$var$mkdirs(dir, (err)=>{
                        if (err) return callback(err);
                        $dwXXI.symlink(srcpath, dstpath, type, callback);
                    });
                });
            });
        });
    });
}
function $9f48385ab13c5f63$var$createSymlinkSync(srcpath, dstpath, type) {
    const destinationExists = $dwXXI.existsSync(dstpath);
    if (destinationExists) return undefined;
    const relative = $9f48385ab13c5f63$var$symlinkPathsSync(srcpath, dstpath);
    srcpath = relative.toDst;
    type = $9f48385ab13c5f63$var$symlinkTypeSync(relative.toCwd, type);
    const dir = $jobL2$path.dirname(dstpath);
    const exists = $dwXXI.existsSync(dir);
    if (exists) return $dwXXI.symlinkSync(srcpath, dstpath, type);
    $9f48385ab13c5f63$var$mkdirsSync(dir);
    return $dwXXI.symlinkSync(srcpath, dstpath, type);
}
module.exports = {
    createSymlink: $9f48385ab13c5f63$require$u($9f48385ab13c5f63$var$createSymlink),
    createSymlinkSync: $9f48385ab13c5f63$var$createSymlinkSync
};

});
parcelRegister("efiL0", function(module, exports) {
'use strict';


var $dwXXI = parcelRequire("dwXXI");

var $eUzTv = parcelRequire("eUzTv");
var $a5f10435284859ff$require$pathExists = $eUzTv.pathExists;
/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */ function $a5f10435284859ff$var$symlinkPaths(srcpath, dstpath, callback) {
    if ($jobL2$path.isAbsolute(srcpath)) return $dwXXI.lstat(srcpath, (err)=>{
        if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink');
            return callback(err);
        }
        return callback(null, {
            'toCwd': srcpath,
            'toDst': srcpath
        });
    });
    else {
        const dstdir = $jobL2$path.dirname(dstpath);
        const relativeToDst = $jobL2$path.join(dstdir, srcpath);
        return $a5f10435284859ff$require$pathExists(relativeToDst, (err, exists)=>{
            if (err) return callback(err);
            if (exists) return callback(null, {
                'toCwd': relativeToDst,
                'toDst': srcpath
            });
            else return $dwXXI.lstat(srcpath, (err)=>{
                if (err) {
                    err.message = err.message.replace('lstat', 'ensureSymlink');
                    return callback(err);
                }
                return callback(null, {
                    'toCwd': srcpath,
                    'toDst': $jobL2$path.relative(dstdir, srcpath)
                });
            });
        });
    }
}
function $a5f10435284859ff$var$symlinkPathsSync(srcpath, dstpath) {
    let exists;
    if ($jobL2$path.isAbsolute(srcpath)) {
        exists = $dwXXI.existsSync(srcpath);
        if (!exists) throw new Error('absolute srcpath does not exist');
        return {
            'toCwd': srcpath,
            'toDst': srcpath
        };
    } else {
        const dstdir = $jobL2$path.dirname(dstpath);
        const relativeToDst = $jobL2$path.join(dstdir, srcpath);
        exists = $dwXXI.existsSync(relativeToDst);
        if (exists) return {
            'toCwd': relativeToDst,
            'toDst': srcpath
        };
        else {
            exists = $dwXXI.existsSync(srcpath);
            if (!exists) throw new Error('relative srcpath does not exist');
            return {
                'toCwd': srcpath,
                'toDst': $jobL2$path.relative(dstdir, srcpath)
            };
        }
    }
}
module.exports = {
    symlinkPaths: $a5f10435284859ff$var$symlinkPaths,
    symlinkPathsSync: $a5f10435284859ff$var$symlinkPathsSync
};

});

parcelRegister("amHrN", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");
function $78bda92c5e0a7678$var$symlinkType(srcpath, type, callback) {
    callback = typeof type === 'function' ? type : callback;
    type = typeof type === 'function' ? false : type;
    if (type) return callback(null, type);
    $dwXXI.lstat(srcpath, (err, stats)=>{
        if (err) return callback(null, 'file');
        type = stats && stats.isDirectory() ? 'dir' : 'file';
        callback(null, type);
    });
}
function $78bda92c5e0a7678$var$symlinkTypeSync(srcpath, type) {
    let stats;
    if (type) return type;
    try {
        stats = $dwXXI.lstatSync(srcpath);
    } catch (e) {
        return 'file';
    }
    return stats && stats.isDirectory() ? 'dir' : 'file';
}
module.exports = {
    symlinkType: $78bda92c5e0a7678$var$symlinkType,
    symlinkTypeSync: $78bda92c5e0a7678$var$symlinkTypeSync
};

});



parcelRegister("cxrxc", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $920dece56d83e1a2$require$u = $1OvF7.fromCallback;

var $dCCa1 = parcelRequire("dCCa1");

$dCCa1.outputJson = $920dece56d83e1a2$require$u((parcelRequire("fylos")));

$dCCa1.outputJsonSync = (parcelRequire("jGvnN"));
// aliases
$dCCa1.outputJSON = $dCCa1.outputJson;
$dCCa1.outputJSONSync = $dCCa1.outputJsonSync;
$dCCa1.writeJSON = $dCCa1.writeJson;
$dCCa1.writeJSONSync = $dCCa1.writeJsonSync;
$dCCa1.readJSON = $dCCa1.readJson;
$dCCa1.readJSONSync = $dCCa1.readJsonSync;
module.exports = $dCCa1;

});
parcelRegister("dCCa1", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $9eac6ce7dff44527$require$u = $1OvF7.fromCallback;

var $9qHFv = parcelRequire("9qHFv");
module.exports = {
    // jsonfile exports
    readJson: $9eac6ce7dff44527$require$u($9qHFv.readFile),
    readJsonSync: $9qHFv.readFileSync,
    writeJson: $9eac6ce7dff44527$require$u($9qHFv.writeFile),
    writeJsonSync: $9qHFv.writeFileSync
};

});
parcelRegister("9qHFv", function(module, exports) {
var $6dd86a621aff198e$var$_fs;


try {
    $6dd86a621aff198e$var$_fs = (parcelRequire("dwXXI"));
} catch (_) {
    $6dd86a621aff198e$var$_fs = $jobL2$fs;
}
function $6dd86a621aff198e$var$readFile(file, options, callback) {
    if (callback == null) {
        callback = options;
        options = {};
    }
    if (typeof options === 'string') options = {
        encoding: options
    };
    options = options || {};
    var fs = options.fs || $6dd86a621aff198e$var$_fs;
    var shouldThrow = true;
    if ('throws' in options) shouldThrow = options.throws;
    fs.readFile(file, options, function(err, data) {
        if (err) return callback(err);
        data = $6dd86a621aff198e$var$stripBom(data);
        var obj;
        try {
            obj = JSON.parse(data, options ? options.reviver : null);
        } catch (err2) {
            if (shouldThrow) {
                err2.message = file + ': ' + err2.message;
                return callback(err2);
            } else return callback(null, null);
        }
        callback(null, obj);
    });
}
function $6dd86a621aff198e$var$readFileSync(file, options) {
    options = options || {};
    if (typeof options === 'string') options = {
        encoding: options
    };
    var fs = options.fs || $6dd86a621aff198e$var$_fs;
    var shouldThrow = true;
    if ('throws' in options) shouldThrow = options.throws;
    try {
        var content = fs.readFileSync(file, options);
        content = $6dd86a621aff198e$var$stripBom(content);
        return JSON.parse(content, options.reviver);
    } catch (err) {
        if (shouldThrow) {
            err.message = file + ': ' + err.message;
            throw err;
        } else return null;
    }
}
function $6dd86a621aff198e$var$stringify(obj, options) {
    var spaces;
    var EOL = '\n';
    if (typeof options === 'object' && options !== null) {
        if (options.spaces) spaces = options.spaces;
        if (options.EOL) EOL = options.EOL;
    }
    var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
    return str.replace(/\n/g, EOL) + EOL;
}
function $6dd86a621aff198e$var$writeFile(file, obj, options, callback) {
    if (callback == null) {
        callback = options;
        options = {};
    }
    options = options || {};
    var fs = options.fs || $6dd86a621aff198e$var$_fs;
    var str = '';
    try {
        str = $6dd86a621aff198e$var$stringify(obj, options);
    } catch (err) {
        // Need to return whether a callback was passed or not
        if (callback) callback(err, null);
        return;
    }
    fs.writeFile(file, str, options, callback);
}
function $6dd86a621aff198e$var$writeFileSync(file, obj, options) {
    options = options || {};
    var fs = options.fs || $6dd86a621aff198e$var$_fs;
    var str = $6dd86a621aff198e$var$stringify(obj, options);
    // not sure if fs.writeFileSync returns anything, but just in case
    return fs.writeFileSync(file, str, options);
}
function $6dd86a621aff198e$var$stripBom(content) {
    // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
    if (Buffer.isBuffer(content)) content = content.toString('utf8');
    content = content.replace(/^\uFEFF/, '');
    return content;
}
var $6dd86a621aff198e$var$jsonfile = {
    readFile: $6dd86a621aff198e$var$readFile,
    readFileSync: $6dd86a621aff198e$var$readFileSync,
    writeFile: $6dd86a621aff198e$var$writeFile,
    writeFileSync: $6dd86a621aff198e$var$writeFileSync
};
module.exports = $6dd86a621aff198e$var$jsonfile;

});


parcelRegister("fylos", function(module, exports) {
'use strict';


var $ggBMC = parcelRequire("ggBMC");

var $eUzTv = parcelRequire("eUzTv");
var $b52aa044e2c6a595$require$pathExists = $eUzTv.pathExists;

var $dCCa1 = parcelRequire("dCCa1");
function $b52aa044e2c6a595$var$outputJson(file, data, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    const dir = $jobL2$path.dirname(file);
    $b52aa044e2c6a595$require$pathExists(dir, (err, itDoes)=>{
        if (err) return callback(err);
        if (itDoes) return $dCCa1.writeJson(file, data, options, callback);
        $ggBMC.mkdirs(dir, (err)=>{
            if (err) return callback(err);
            $dCCa1.writeJson(file, data, options, callback);
        });
    });
}
module.exports = $b52aa044e2c6a595$var$outputJson;

});

parcelRegister("jGvnN", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $ggBMC = parcelRequire("ggBMC");

var $dCCa1 = parcelRequire("dCCa1");
function $e54a488e8483e46c$var$outputJsonSync(file, data, options) {
    const dir = $jobL2$path.dirname(file);
    if (!$dwXXI.existsSync(dir)) $ggBMC.mkdirsSync(dir);
    $dCCa1.writeJsonSync(file, data, options);
}
module.exports = $e54a488e8483e46c$var$outputJsonSync;

});


parcelRegister("I7XCi", function(module, exports) {
'use strict';

module.exports = {
    moveSync: (parcelRequire("eGiIR"))
};

});
parcelRegister("eGiIR", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $11Sqo = parcelRequire("11Sqo");
var $ab0382de42ad6465$require$copySync = $11Sqo.copySync;

var $0Fcuf = parcelRequire("0Fcuf");
var $ab0382de42ad6465$require$removeSync = $0Fcuf.removeSync;

var $ggBMC = parcelRequire("ggBMC");
var $ab0382de42ad6465$require$mkdirpSync = $ggBMC.mkdirpSync;

var $4nJK9 = parcelRequire("4nJK9");
function $ab0382de42ad6465$var$moveSync(src, dest, opts) {
    opts = opts || {};
    const overwrite = opts.overwrite || opts.clobber || false;
    const { srcStat: srcStat } = $4nJK9.checkPathsSync(src, dest, 'move');
    $4nJK9.checkParentPathsSync(src, srcStat, dest, 'move');
    $ab0382de42ad6465$require$mkdirpSync($jobL2$path.dirname(dest));
    return $ab0382de42ad6465$var$doRename(src, dest, overwrite);
}
function $ab0382de42ad6465$var$doRename(src, dest, overwrite) {
    if (overwrite) {
        $ab0382de42ad6465$require$removeSync(dest);
        return $ab0382de42ad6465$var$rename(src, dest, overwrite);
    }
    if ($dwXXI.existsSync(dest)) throw new Error('dest already exists.');
    return $ab0382de42ad6465$var$rename(src, dest, overwrite);
}
function $ab0382de42ad6465$var$rename(src, dest, overwrite) {
    try {
        $dwXXI.renameSync(src, dest);
    } catch (err) {
        if (err.code !== 'EXDEV') throw err;
        return $ab0382de42ad6465$var$moveAcrossDevice(src, dest, overwrite);
    }
}
function $ab0382de42ad6465$var$moveAcrossDevice(src, dest, overwrite) {
    const opts = {
        overwrite: overwrite,
        errorOnExist: true
    };
    $ab0382de42ad6465$require$copySync(src, dest, opts);
    return $ab0382de42ad6465$require$removeSync(src);
}
module.exports = $ab0382de42ad6465$var$moveSync;

});


parcelRegister("ez46y", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $a9a784ae22b0fc4a$require$u = $1OvF7.fromCallback;

module.exports = {
    move: $a9a784ae22b0fc4a$require$u((parcelRequire("1YyAY")))
};

});
parcelRegister("1YyAY", function(module, exports) {
'use strict';

var $dwXXI = parcelRequire("dwXXI");


var $8DRY7 = parcelRequire("8DRY7");
var $17063af87ecb860a$require$copy = $8DRY7.copy;

var $0Fcuf = parcelRequire("0Fcuf");
var $17063af87ecb860a$require$remove = $0Fcuf.remove;

var $ggBMC = parcelRequire("ggBMC");
var $17063af87ecb860a$require$mkdirp = $ggBMC.mkdirp;

var $eUzTv = parcelRequire("eUzTv");
var $17063af87ecb860a$require$pathExists = $eUzTv.pathExists;

var $4nJK9 = parcelRequire("4nJK9");
function $17063af87ecb860a$var$move(src, dest, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    const overwrite = opts.overwrite || opts.clobber || false;
    $4nJK9.checkPaths(src, dest, 'move', (err, stats)=>{
        if (err) return cb(err);
        const { srcStat: srcStat } = stats;
        $4nJK9.checkParentPaths(src, srcStat, dest, 'move', (err)=>{
            if (err) return cb(err);
            $17063af87ecb860a$require$mkdirp($jobL2$path.dirname(dest), (err)=>{
                if (err) return cb(err);
                return $17063af87ecb860a$var$doRename(src, dest, overwrite, cb);
            });
        });
    });
}
function $17063af87ecb860a$var$doRename(src, dest, overwrite, cb) {
    if (overwrite) return $17063af87ecb860a$require$remove(dest, (err)=>{
        if (err) return cb(err);
        return $17063af87ecb860a$var$rename(src, dest, overwrite, cb);
    });
    $17063af87ecb860a$require$pathExists(dest, (err, destExists)=>{
        if (err) return cb(err);
        if (destExists) return cb(new Error('dest already exists.'));
        return $17063af87ecb860a$var$rename(src, dest, overwrite, cb);
    });
}
function $17063af87ecb860a$var$rename(src, dest, overwrite, cb) {
    $dwXXI.rename(src, dest, (err)=>{
        if (!err) return cb();
        if (err.code !== 'EXDEV') return cb(err);
        return $17063af87ecb860a$var$moveAcrossDevice(src, dest, overwrite, cb);
    });
}
function $17063af87ecb860a$var$moveAcrossDevice(src, dest, overwrite, cb) {
    const opts = {
        overwrite: overwrite,
        errorOnExist: true
    };
    $17063af87ecb860a$require$copy(src, dest, opts, (err)=>{
        if (err) return cb(err);
        return $17063af87ecb860a$require$remove(src, cb);
    });
}
module.exports = $17063af87ecb860a$var$move;

});


parcelRegister("drLDP", function(module, exports) {
'use strict';

var $1OvF7 = parcelRequire("1OvF7");
var $9ca2c0949b849542$require$u = $1OvF7.fromCallback;

var $dwXXI = parcelRequire("dwXXI");


var $ggBMC = parcelRequire("ggBMC");

var $eUzTv = parcelRequire("eUzTv");
var $9ca2c0949b849542$require$pathExists = $eUzTv.pathExists;
function $9ca2c0949b849542$var$outputFile(file, data, encoding, callback) {
    if (typeof encoding === 'function') {
        callback = encoding;
        encoding = 'utf8';
    }
    const dir = $jobL2$path.dirname(file);
    $9ca2c0949b849542$require$pathExists(dir, (err, itDoes)=>{
        if (err) return callback(err);
        if (itDoes) return $dwXXI.writeFile(file, data, encoding, callback);
        $ggBMC.mkdirs(dir, (err)=>{
            if (err) return callback(err);
            $dwXXI.writeFile(file, data, encoding, callback);
        });
    });
}
function $9ca2c0949b849542$var$outputFileSync(file, ...args) {
    const dir = $jobL2$path.dirname(file);
    if ($dwXXI.existsSync(dir)) return $dwXXI.writeFileSync(file, ...args);
    $ggBMC.mkdirsSync(dir);
    $dwXXI.writeFileSync(file, ...args);
}
module.exports = {
    outputFile: $9ca2c0949b849542$require$u($9ca2c0949b849542$var$outputFile),
    outputFileSync: $9ca2c0949b849542$var$outputFileSync
};

});

parcelRegister("10orv", function(module, exports) {
'use strict';


var $81Xyl = parcelRequire("81Xyl");

var $kKIsd = parcelRequire("kKIsd");

var $EOaiL = parcelRequire("EOaiL");

var $3LrmG = parcelRequire("3LrmG");
const $0bb8c055943947a3$var$isObject = (val)=>val && typeof val === 'object' && !Array.isArray(val);
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */ const $0bb8c055943947a3$var$picomatch = (glob, options, returnState = false)=>{
    if (Array.isArray(glob)) {
        const fns = glob.map((input)=>$0bb8c055943947a3$var$picomatch(input, options, returnState));
        const arrayMatcher = (str)=>{
            for (const isMatch of fns){
                const state = isMatch(str);
                if (state) return state;
            }
            return false;
        };
        return arrayMatcher;
    }
    const isState = $0bb8c055943947a3$var$isObject(glob) && glob.tokens && glob.input;
    if (glob === '' || typeof glob !== 'string' && !isState) throw new TypeError('Expected pattern to be a non-empty string');
    const opts = options || {};
    const posix = $EOaiL.isWindows(options);
    const regex = isState ? $0bb8c055943947a3$var$picomatch.compileRe(glob, options) : $0bb8c055943947a3$var$picomatch.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = ()=>false;
    if (opts.ignore) {
        const ignoreOpts = {
            ...options,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        isIgnored = $0bb8c055943947a3$var$picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false)=>{
        const { isMatch: isMatch, match: match, output: output } = $0bb8c055943947a3$var$picomatch.test(input, regex, options, {
            glob: glob,
            posix: posix
        });
        const result = {
            glob: glob,
            state: state,
            regex: regex,
            posix: posix,
            input: input,
            output: output,
            match: match,
            isMatch: isMatch
        };
        if (typeof opts.onResult === 'function') opts.onResult(result);
        if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (isIgnored(input)) {
            if (typeof opts.onIgnore === 'function') opts.onIgnore(result);
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (typeof opts.onMatch === 'function') opts.onMatch(result);
        return returnObject ? result : true;
    };
    if (returnState) matcher.state = state;
    return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */ $0bb8c055943947a3$var$picomatch.test = (input, regex, options, { glob: glob, posix: posix } = {})=>{
    if (typeof input !== 'string') throw new TypeError('Expected input to be a string');
    if (input === '') return {
        isMatch: false,
        output: ''
    };
    const opts = options || {};
    const format = opts.format || (posix ? $EOaiL.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
    }
    if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) match = $0bb8c055943947a3$var$picomatch.matchBase(input, regex, options, posix);
        else match = regex.exec(output);
    }
    return {
        isMatch: Boolean(match),
        match: match,
        output: output
    };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */ $0bb8c055943947a3$var$picomatch.matchBase = (input, glob, options, posix = $EOaiL.isWindows(options))=>{
    const regex = glob instanceof RegExp ? glob : $0bb8c055943947a3$var$picomatch.makeRe(glob, options);
    return regex.test($jobL2$path.basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ $0bb8c055943947a3$var$picomatch.isMatch = (str, patterns, options)=>$0bb8c055943947a3$var$picomatch(patterns, options)(str);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */ $0bb8c055943947a3$var$picomatch.parse = (pattern, options)=>{
    if (Array.isArray(pattern)) return pattern.map((p)=>$0bb8c055943947a3$var$picomatch.parse(p, options));
    return $kKIsd(pattern, {
        ...options,
        fastpaths: false
    });
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ $0bb8c055943947a3$var$picomatch.scan = (input, options)=>$81Xyl(input, options);
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ $0bb8c055943947a3$var$picomatch.compileRe = (parsed, options, returnOutput = false, returnState = false)=>{
    if (returnOutput === true) return parsed.output;
    const opts = options || {};
    const prepend = opts.contains ? '' : '^';
    const append = opts.contains ? '' : '$';
    let source = `${prepend}(?:${parsed.output})${append}`;
    if (parsed && parsed.negated === true) source = `^(?!${source}).*$`;
    const regex = $0bb8c055943947a3$var$picomatch.toRegex(source, options);
    if (returnState === true) regex.state = parsed;
    return regex;
};
$0bb8c055943947a3$var$picomatch.makeRe = (input, options, returnOutput = false, returnState = false)=>{
    if (!input || typeof input !== 'string') throw new TypeError('Expected a non-empty string');
    const opts = options || {};
    let parsed = {
        negated: false,
        fastpaths: true
    };
    let prefix = '';
    let output;
    if (input.startsWith('./')) {
        input = input.slice(2);
        prefix = parsed.prefix = './';
    }
    if (opts.fastpaths !== false && (input[0] === '.' || input[0] === '*')) output = $kKIsd.fastpaths(input, options);
    if (output === undefined) {
        parsed = $kKIsd(input, options);
        parsed.prefix = prefix + (parsed.prefix || '');
    } else parsed.output = output;
    return $0bb8c055943947a3$var$picomatch.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */ $0bb8c055943947a3$var$picomatch.toRegex = (source, options)=>{
    try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
    } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
    }
};
/**
 * Picomatch constants.
 * @return {Object}
 */ $0bb8c055943947a3$var$picomatch.constants = $3LrmG;
/**
 * Expose "picomatch"
 */ module.exports = $0bb8c055943947a3$var$picomatch;

});
parcelRegister("81Xyl", function(module, exports) {
'use strict';

var $EOaiL = parcelRequire("EOaiL");

var $3LrmG = parcelRequire("3LrmG");
var $5d8c9cb0cb9f69c5$require$CHAR_ASTERISK = $3LrmG.CHAR_ASTERISK;
var $5d8c9cb0cb9f69c5$require$CHAR_AT = $3LrmG.CHAR_AT;
var $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH = $3LrmG.CHAR_BACKWARD_SLASH;
var $5d8c9cb0cb9f69c5$require$CHAR_COMMA = $3LrmG.CHAR_COMMA;
var $5d8c9cb0cb9f69c5$require$CHAR_DOT = $3LrmG.CHAR_DOT;
var $5d8c9cb0cb9f69c5$require$CHAR_EXCLAMATION_MARK = $3LrmG.CHAR_EXCLAMATION_MARK;
var $5d8c9cb0cb9f69c5$require$CHAR_FORWARD_SLASH = $3LrmG.CHAR_FORWARD_SLASH;
var $5d8c9cb0cb9f69c5$require$CHAR_LEFT_CURLY_BRACE = $3LrmG.CHAR_LEFT_CURLY_BRACE;
var $5d8c9cb0cb9f69c5$require$CHAR_LEFT_PARENTHESES = $3LrmG.CHAR_LEFT_PARENTHESES;
var $5d8c9cb0cb9f69c5$require$CHAR_LEFT_SQUARE_BRACKET = $3LrmG.CHAR_LEFT_SQUARE_BRACKET;
var $5d8c9cb0cb9f69c5$require$CHAR_PLUS = $3LrmG.CHAR_PLUS;
var $5d8c9cb0cb9f69c5$require$CHAR_QUESTION_MARK = $3LrmG.CHAR_QUESTION_MARK;
var $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_CURLY_BRACE = $3LrmG.CHAR_RIGHT_CURLY_BRACE;
var $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_PARENTHESES = $3LrmG.CHAR_RIGHT_PARENTHESES;
var $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_SQUARE_BRACKET = $3LrmG.CHAR_RIGHT_SQUARE_BRACKET;
const $5d8c9cb0cb9f69c5$var$isPathSeparator = (code)=>{
    return code === $5d8c9cb0cb9f69c5$require$CHAR_FORWARD_SLASH || code === $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH;
};
const $5d8c9cb0cb9f69c5$var$depth = (token)=>{
    if (token.isPrefix !== true) token.depth = token.isGlobstar ? Infinity : 1;
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), and `negated` (true if the path starts with `!`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */ const $5d8c9cb0cb9f69c5$var$scan = (input, options)=>{
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = {
        value: '',
        depth: 0,
        isGlob: false
    };
    const eos = ()=>index >= length;
    const peek = ()=>str.charCodeAt(index + 1);
    const advance = ()=>{
        prev = code;
        return str.charCodeAt(++index);
    };
    while(index < length){
        code = advance();
        let next;
        if (code === $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_CURLY_BRACE) braceEscaped = true;
            continue;
        }
        if (braceEscaped === true || code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while(eos() !== true && (code = advance())){
                if (code === $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    continue;
                }
                if (braceEscaped !== true && code === $5d8c9cb0cb9f69c5$require$CHAR_DOT && (code = advance()) === $5d8c9cb0cb9f69c5$require$CHAR_DOT) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) continue;
                    break;
                }
                if (braceEscaped !== true && code === $5d8c9cb0cb9f69c5$require$CHAR_COMMA) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) continue;
                    break;
                }
                if (code === $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_CURLY_BRACE) {
                    braces--;
                    if (braces === 0) {
                        braceEscaped = false;
                        isBrace = token.isBrace = true;
                        finished = true;
                        break;
                    }
                }
            }
            if (scanToEnd === true) continue;
            break;
        }
        if (code === $5d8c9cb0cb9f69c5$require$CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
                value: '',
                depth: 0,
                isGlob: false
            };
            if (finished === true) continue;
            if (prev === $5d8c9cb0cb9f69c5$require$CHAR_DOT && index === start + 1) {
                start += 2;
                continue;
            }
            lastIndex = index + 1;
            continue;
        }
        if (opts.noext !== true) {
            const isExtglobChar = code === $5d8c9cb0cb9f69c5$require$CHAR_PLUS || code === $5d8c9cb0cb9f69c5$require$CHAR_AT || code === $5d8c9cb0cb9f69c5$require$CHAR_ASTERISK || code === $5d8c9cb0cb9f69c5$require$CHAR_QUESTION_MARK || code === $5d8c9cb0cb9f69c5$require$CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_PARENTHESES) {
                isGlob = token.isGlob = true;
                isExtglob = token.isExtglob = true;
                finished = true;
                if (scanToEnd === true) {
                    while(eos() !== true && (code = advance())){
                        if (code === $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            continue;
                        }
                        if (code === $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            finished = true;
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        }
        if (code === $5d8c9cb0cb9f69c5$require$CHAR_ASTERISK) {
            if (prev === $5d8c9cb0cb9f69c5$require$CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
        if (code === $5d8c9cb0cb9f69c5$require$CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
        if (code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_SQUARE_BRACKET) while(eos() !== true && (next = advance())){
            if (next === $5d8c9cb0cb9f69c5$require$CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
            }
            if (next === $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_SQUARE_BRACKET) {
                isBracket = token.isBracket = true;
                isGlob = token.isGlob = true;
                finished = true;
                if (scanToEnd === true) continue;
                break;
            }
        }
        if (opts.nonegate !== true && code === $5d8c9cb0cb9f69c5$require$CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
        }
        if (opts.noparen !== true && code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
                while(eos() !== true && (code = advance())){
                    if (code === $5d8c9cb0cb9f69c5$require$CHAR_LEFT_PARENTHESES) {
                        backslashes = token.backslashes = true;
                        code = advance();
                        continue;
                    }
                    if (code === $5d8c9cb0cb9f69c5$require$CHAR_RIGHT_PARENTHESES) {
                        finished = true;
                        break;
                    }
                }
                continue;
            }
            break;
        }
        if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
    }
    if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
    }
    let base = str;
    let prefix = '';
    let glob = '';
    if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
    } else if (isGlob === true) {
        base = '';
        glob = str;
    } else base = str;
    if (base && base !== '' && base !== '/' && base !== str) {
        if ($5d8c9cb0cb9f69c5$var$isPathSeparator(base.charCodeAt(base.length - 1))) base = base.slice(0, -1);
    }
    if (opts.unescape === true) {
        if (glob) glob = $EOaiL.removeBackslashes(glob);
        if (base && backslashes === true) base = $EOaiL.removeBackslashes(base);
    }
    const state = {
        prefix: prefix,
        input: input,
        start: start,
        base: base,
        glob: glob,
        isBrace: isBrace,
        isBracket: isBracket,
        isGlob: isGlob,
        isExtglob: isExtglob,
        isGlobstar: isGlobstar,
        negated: negated
    };
    if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!$5d8c9cb0cb9f69c5$var$isPathSeparator(code)) tokens.push(token);
        state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for(let idx = 0; idx < slashes.length; idx++){
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
                if (idx === 0 && start !== 0) {
                    tokens[idx].isPrefix = true;
                    tokens[idx].value = prefix;
                } else tokens[idx].value = value;
                $5d8c9cb0cb9f69c5$var$depth(tokens[idx]);
                state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== '') parts.push(value);
            prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
                tokens[tokens.length - 1].value = value;
                $5d8c9cb0cb9f69c5$var$depth(tokens[tokens.length - 1]);
                state.maxDepth += tokens[tokens.length - 1].depth;
            }
        }
        state.slashes = slashes;
        state.parts = parts;
    }
    return state;
};
module.exports = $5d8c9cb0cb9f69c5$var$scan;

});
parcelRegister("EOaiL", function(module, exports) {

$parcel$export(module.exports, "hasRegexChars", () => $07aaa64bdff2a59f$export$6540a013a39bb50d, (v) => $07aaa64bdff2a59f$export$6540a013a39bb50d = v);
$parcel$export(module.exports, "escapeRegex", () => $07aaa64bdff2a59f$export$104ed90cc1a13451, (v) => $07aaa64bdff2a59f$export$104ed90cc1a13451 = v);
$parcel$export(module.exports, "toPosixSlashes", () => $07aaa64bdff2a59f$export$e610e037975797ee, (v) => $07aaa64bdff2a59f$export$e610e037975797ee = v);
$parcel$export(module.exports, "removeBackslashes", () => $07aaa64bdff2a59f$export$f403de0a7ba7a743, (v) => $07aaa64bdff2a59f$export$f403de0a7ba7a743 = v);
$parcel$export(module.exports, "supportsLookbehinds", () => $07aaa64bdff2a59f$export$bcf709e5e3483cdb, (v) => $07aaa64bdff2a59f$export$bcf709e5e3483cdb = v);
$parcel$export(module.exports, "isWindows", () => $07aaa64bdff2a59f$export$f993c945890e93ba, (v) => $07aaa64bdff2a59f$export$f993c945890e93ba = v);
$parcel$export(module.exports, "escapeLast", () => $07aaa64bdff2a59f$export$13d0f4185f159c8, (v) => $07aaa64bdff2a59f$export$13d0f4185f159c8 = v);
$parcel$export(module.exports, "removePrefix", () => $07aaa64bdff2a59f$export$f2888183a34644d4, (v) => $07aaa64bdff2a59f$export$f2888183a34644d4 = v);
$parcel$export(module.exports, "wrapOutput", () => $07aaa64bdff2a59f$export$25bddda26836484b, (v) => $07aaa64bdff2a59f$export$25bddda26836484b = v);
var $07aaa64bdff2a59f$export$a6cdc56e425d0d0a;
var $07aaa64bdff2a59f$export$6540a013a39bb50d;
var $07aaa64bdff2a59f$export$a92319f7ab133839;
var $07aaa64bdff2a59f$export$104ed90cc1a13451;
var $07aaa64bdff2a59f$export$e610e037975797ee;
var $07aaa64bdff2a59f$export$f403de0a7ba7a743;
var $07aaa64bdff2a59f$export$bcf709e5e3483cdb;
var $07aaa64bdff2a59f$export$f993c945890e93ba;
var $07aaa64bdff2a59f$export$13d0f4185f159c8;
var $07aaa64bdff2a59f$export$f2888183a34644d4;
var $07aaa64bdff2a59f$export$25bddda26836484b;
'use strict';

const $07aaa64bdff2a59f$var$win32 = process.platform === 'win32';

var $3LrmG = parcelRequire("3LrmG");
var $07aaa64bdff2a59f$require$REGEX_BACKSLASH = $3LrmG.REGEX_BACKSLASH;
var $07aaa64bdff2a59f$require$REGEX_REMOVE_BACKSLASH = $3LrmG.REGEX_REMOVE_BACKSLASH;
var $07aaa64bdff2a59f$require$REGEX_SPECIAL_CHARS = $3LrmG.REGEX_SPECIAL_CHARS;
var $07aaa64bdff2a59f$require$REGEX_SPECIAL_CHARS_GLOBAL = $3LrmG.REGEX_SPECIAL_CHARS_GLOBAL;
$07aaa64bdff2a59f$export$a6cdc56e425d0d0a = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val);
$07aaa64bdff2a59f$export$6540a013a39bb50d = (str)=>$07aaa64bdff2a59f$require$REGEX_SPECIAL_CHARS.test(str);
$07aaa64bdff2a59f$export$a92319f7ab133839 = (str)=>str.length === 1 && $07aaa64bdff2a59f$export$6540a013a39bb50d(str);
$07aaa64bdff2a59f$export$104ed90cc1a13451 = (str)=>str.replace($07aaa64bdff2a59f$require$REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
$07aaa64bdff2a59f$export$e610e037975797ee = (str)=>str.replace($07aaa64bdff2a59f$require$REGEX_BACKSLASH, '/');
$07aaa64bdff2a59f$export$f403de0a7ba7a743 = (str)=>{
    return str.replace($07aaa64bdff2a59f$require$REGEX_REMOVE_BACKSLASH, (match)=>{
        return match === '\\' ? '' : match;
    });
};
$07aaa64bdff2a59f$export$bcf709e5e3483cdb = ()=>{
    const segs = process.version.slice(1).split('.').map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) return true;
    return false;
};
$07aaa64bdff2a59f$export$f993c945890e93ba = (options)=>{
    if (options && typeof options.windows === 'boolean') return options.windows;
    return $07aaa64bdff2a59f$var$win32 === true || $jobL2$path.sep === '\\';
};
$07aaa64bdff2a59f$export$13d0f4185f159c8 = (input, char, lastIdx)=>{
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === '\\') return $07aaa64bdff2a59f$export$13d0f4185f159c8(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};
$07aaa64bdff2a59f$export$f2888183a34644d4 = (input, state = {})=>{
    let output = input;
    if (output.startsWith('./')) {
        output = output.slice(2);
        state.prefix = './';
    }
    return output;
};
$07aaa64bdff2a59f$export$25bddda26836484b = (input, state = {}, options = {})=>{
    const prepend = options.contains ? '' : '^';
    const append = options.contains ? '' : '$';
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) output = `(?:^(?!${output}).*$)`;
    return output;
};

});
parcelRegister("3LrmG", function(module, exports) {
'use strict';

const $2bdafcf3b194dff5$var$WIN_SLASH = '\\\\/';
const $2bdafcf3b194dff5$var$WIN_NO_SLASH = `[^${$2bdafcf3b194dff5$var$WIN_SLASH}]`;
/**
 * Posix glob regex
 */ const $2bdafcf3b194dff5$var$DOT_LITERAL = '\\.';
const $2bdafcf3b194dff5$var$PLUS_LITERAL = '\\+';
const $2bdafcf3b194dff5$var$QMARK_LITERAL = '\\?';
const $2bdafcf3b194dff5$var$SLASH_LITERAL = '\\/';
const $2bdafcf3b194dff5$var$ONE_CHAR = '(?=.)';
const $2bdafcf3b194dff5$var$QMARK = '[^/]';
const $2bdafcf3b194dff5$var$END_ANCHOR = `(?:${$2bdafcf3b194dff5$var$SLASH_LITERAL}|$)`;
const $2bdafcf3b194dff5$var$START_ANCHOR = `(?:^|${$2bdafcf3b194dff5$var$SLASH_LITERAL})`;
const $2bdafcf3b194dff5$var$DOTS_SLASH = `${$2bdafcf3b194dff5$var$DOT_LITERAL}{1,2}${$2bdafcf3b194dff5$var$END_ANCHOR}`;
const $2bdafcf3b194dff5$var$NO_DOT = `(?!${$2bdafcf3b194dff5$var$DOT_LITERAL})`;
const $2bdafcf3b194dff5$var$NO_DOTS = `(?!${$2bdafcf3b194dff5$var$START_ANCHOR}${$2bdafcf3b194dff5$var$DOTS_SLASH})`;
const $2bdafcf3b194dff5$var$NO_DOT_SLASH = `(?!${$2bdafcf3b194dff5$var$DOT_LITERAL}{0,1}${$2bdafcf3b194dff5$var$END_ANCHOR})`;
const $2bdafcf3b194dff5$var$NO_DOTS_SLASH = `(?!${$2bdafcf3b194dff5$var$DOTS_SLASH})`;
const $2bdafcf3b194dff5$var$QMARK_NO_DOT = `[^.${$2bdafcf3b194dff5$var$SLASH_LITERAL}]`;
const $2bdafcf3b194dff5$var$STAR = `${$2bdafcf3b194dff5$var$QMARK}*?`;
const $2bdafcf3b194dff5$var$POSIX_CHARS = {
    DOT_LITERAL: $2bdafcf3b194dff5$var$DOT_LITERAL,
    PLUS_LITERAL: $2bdafcf3b194dff5$var$PLUS_LITERAL,
    QMARK_LITERAL: $2bdafcf3b194dff5$var$QMARK_LITERAL,
    SLASH_LITERAL: $2bdafcf3b194dff5$var$SLASH_LITERAL,
    ONE_CHAR: $2bdafcf3b194dff5$var$ONE_CHAR,
    QMARK: $2bdafcf3b194dff5$var$QMARK,
    END_ANCHOR: $2bdafcf3b194dff5$var$END_ANCHOR,
    DOTS_SLASH: $2bdafcf3b194dff5$var$DOTS_SLASH,
    NO_DOT: $2bdafcf3b194dff5$var$NO_DOT,
    NO_DOTS: $2bdafcf3b194dff5$var$NO_DOTS,
    NO_DOT_SLASH: $2bdafcf3b194dff5$var$NO_DOT_SLASH,
    NO_DOTS_SLASH: $2bdafcf3b194dff5$var$NO_DOTS_SLASH,
    QMARK_NO_DOT: $2bdafcf3b194dff5$var$QMARK_NO_DOT,
    STAR: $2bdafcf3b194dff5$var$STAR,
    START_ANCHOR: $2bdafcf3b194dff5$var$START_ANCHOR
};
/**
 * Windows glob regex
 */ const $2bdafcf3b194dff5$var$WINDOWS_CHARS = {
    ...$2bdafcf3b194dff5$var$POSIX_CHARS,
    SLASH_LITERAL: `[${$2bdafcf3b194dff5$var$WIN_SLASH}]`,
    QMARK: $2bdafcf3b194dff5$var$WIN_NO_SLASH,
    STAR: `${$2bdafcf3b194dff5$var$WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${$2bdafcf3b194dff5$var$DOT_LITERAL}{1,2}(?:[${$2bdafcf3b194dff5$var$WIN_SLASH}]|$)`,
    NO_DOT: `(?!${$2bdafcf3b194dff5$var$DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${$2bdafcf3b194dff5$var$WIN_SLASH}])${$2bdafcf3b194dff5$var$DOT_LITERAL}{1,2}(?:[${$2bdafcf3b194dff5$var$WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${$2bdafcf3b194dff5$var$DOT_LITERAL}{0,1}(?:[${$2bdafcf3b194dff5$var$WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${$2bdafcf3b194dff5$var$DOT_LITERAL}{1,2}(?:[${$2bdafcf3b194dff5$var$WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${$2bdafcf3b194dff5$var$WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${$2bdafcf3b194dff5$var$WIN_SLASH}])`,
    END_ANCHOR: `(?:[${$2bdafcf3b194dff5$var$WIN_SLASH}]|$)`
};
/**
 * POSIX Bracket Regex
 */ const $2bdafcf3b194dff5$var$POSIX_REGEX_SOURCE = {
    alnum: 'a-zA-Z0-9',
    alpha: 'a-zA-Z',
    ascii: '\\x00-\\x7F',
    blank: ' \\t',
    cntrl: '\\x00-\\x1F\\x7F',
    digit: '0-9',
    graph: '\\x21-\\x7E',
    lower: 'a-z',
    print: '\\x20-\\x7E ',
    punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
    space: ' \\t\\r\\n\\v\\f',
    upper: 'A-Z',
    word: 'A-Za-z0-9_',
    xdigit: 'A-Fa-f0-9'
};
module.exports = {
    MAX_LENGTH: 65536,
    POSIX_REGEX_SOURCE: $2bdafcf3b194dff5$var$POSIX_REGEX_SOURCE,
    // regular expressions
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    // Replace globs with equivalent patterns to reduce parsing time.
    REPLACEMENTS: {
        '***': '*',
        '**/**': '**',
        '**/**/**': '**'
    },
    // Digits
    CHAR_0: 48,
    /* 0 */ CHAR_9: 57,
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 65,
    /* A */ CHAR_LOWERCASE_A: 97,
    /* a */ CHAR_UPPERCASE_Z: 90,
    /* Z */ CHAR_LOWERCASE_Z: 122,
    /* z */ CHAR_LEFT_PARENTHESES: 40,
    /* ( */ CHAR_RIGHT_PARENTHESES: 41,
    /* ) */ CHAR_ASTERISK: 42,
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: 38,
    /* & */ CHAR_AT: 64,
    /* @ */ CHAR_BACKWARD_SLASH: 92,
    /* \ */ CHAR_CARRIAGE_RETURN: 13,
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: 94,
    /* ^ */ CHAR_COLON: 58,
    /* : */ CHAR_COMMA: 44,
    /* , */ CHAR_DOT: 46,
    /* . */ CHAR_DOUBLE_QUOTE: 34,
    /* " */ CHAR_EQUAL: 61,
    /* = */ CHAR_EXCLAMATION_MARK: 33,
    /* ! */ CHAR_FORM_FEED: 12,
    /* \f */ CHAR_FORWARD_SLASH: 47,
    /* / */ CHAR_GRAVE_ACCENT: 96,
    /* ` */ CHAR_HASH: 35,
    /* # */ CHAR_HYPHEN_MINUS: 45,
    /* - */ CHAR_LEFT_ANGLE_BRACKET: 60,
    /* < */ CHAR_LEFT_CURLY_BRACE: 123,
    /* { */ CHAR_LEFT_SQUARE_BRACKET: 91,
    /* [ */ CHAR_LINE_FEED: 10,
    /* \n */ CHAR_NO_BREAK_SPACE: 160,
    /* \u00A0 */ CHAR_PERCENT: 37,
    /* % */ CHAR_PLUS: 43,
    /* + */ CHAR_QUESTION_MARK: 63,
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: 62,
    /* > */ CHAR_RIGHT_CURLY_BRACE: 125,
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: 93,
    /* ] */ CHAR_SEMICOLON: 59,
    /* ; */ CHAR_SINGLE_QUOTE: 39,
    /* ' */ CHAR_SPACE: 32,
    /*   */ CHAR_TAB: 9,
    /* \t */ CHAR_UNDERSCORE: 95,
    /* _ */ CHAR_VERTICAL_LINE: 124,
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    /* \uFEFF */ SEP: $jobL2$path.sep,
    /**
   * Create EXTGLOB_CHARS
   */ extglobChars (chars) {
        return {
            '!': {
                type: 'negate',
                open: '(?:(?!(?:',
                close: `))${chars.STAR})`
            },
            '?': {
                type: 'qmark',
                open: '(?:',
                close: ')?'
            },
            '+': {
                type: 'plus',
                open: '(?:',
                close: ')+'
            },
            '*': {
                type: 'star',
                open: '(?:',
                close: ')*'
            },
            '@': {
                type: 'at',
                open: '(?:',
                close: ')'
            }
        };
    },
    /**
   * Create GLOB_CHARS
   */ globChars (win32) {
        return win32 === true ? $2bdafcf3b194dff5$var$WINDOWS_CHARS : $2bdafcf3b194dff5$var$POSIX_CHARS;
    }
};

});



parcelRegister("kKIsd", function(module, exports) {
'use strict';

var $3LrmG = parcelRequire("3LrmG");

var $EOaiL = parcelRequire("EOaiL");
/**
 * Constants
 */ const { MAX_LENGTH: $f1ba962b40e679f3$var$MAX_LENGTH, POSIX_REGEX_SOURCE: $f1ba962b40e679f3$var$POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS: $f1ba962b40e679f3$var$REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF: $f1ba962b40e679f3$var$REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS: $f1ba962b40e679f3$var$REPLACEMENTS } = $3LrmG;
/**
 * Helpers
 */ const $f1ba962b40e679f3$var$expandRange = (args, options)=>{
    if (typeof options.expandRange === 'function') return options.expandRange(...args, options);
    args.sort();
    const value = `[${args.join('-')}]`;
    try {
        /* eslint-disable-next-line no-new */ new RegExp(value);
    } catch (ex) {
        return args.map((v)=>$EOaiL.escapeRegex(v)).join('..');
    }
    return value;
};
/**
 * Create the message for a syntax error
 */ const $f1ba962b40e679f3$var$syntaxError = (type, char)=>{
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */ const $f1ba962b40e679f3$var$parse = (input, options)=>{
    if (typeof input !== 'string') throw new TypeError('Expected a string');
    input = $f1ba962b40e679f3$var$REPLACEMENTS[input] || input;
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === 'number' ? Math.min($f1ba962b40e679f3$var$MAX_LENGTH, opts.maxLength) : $f1ba962b40e679f3$var$MAX_LENGTH;
    let len = input.length;
    if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    const bos = {
        type: 'bos',
        value: '',
        output: opts.prepend || ''
    };
    const tokens = [
        bos
    ];
    const capture = opts.capture ? '' : '?:';
    const win32 = $EOaiL.isWindows(options);
    // create constants based on platform, for windows or posix
    const PLATFORM_CHARS = $3LrmG.globChars(win32);
    const EXTGLOB_CHARS = $3LrmG.extglobChars(PLATFORM_CHARS);
    const { DOT_LITERAL: DOT_LITERAL, PLUS_LITERAL: PLUS_LITERAL, SLASH_LITERAL: SLASH_LITERAL, ONE_CHAR: ONE_CHAR, DOTS_SLASH: DOTS_SLASH, NO_DOT: NO_DOT, NO_DOT_SLASH: NO_DOT_SLASH, NO_DOTS_SLASH: NO_DOTS_SLASH, QMARK: QMARK, QMARK_NO_DOT: QMARK_NO_DOT, STAR: STAR, START_ANCHOR: START_ANCHOR } = PLATFORM_CHARS;
    const globstar = (opts)=>{
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? '' : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) star = `(${star})`;
    // minimatch options support
    if (typeof opts.noext === 'boolean') opts.noextglob = opts.noext;
    const state = {
        input: input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: '',
        output: '',
        prefix: '',
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens: tokens
    };
    input = $EOaiL.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    /**
   * Tokenizing helpers
   */ const eos = ()=>state.index === len - 1;
    const peek = state.peek = (n = 1)=>input[state.index + n];
    const advance = state.advance = ()=>input[++state.index];
    const remaining = ()=>input.slice(state.index + 1);
    const consume = (value = '', num = 0)=>{
        state.consumed += value;
        state.index += num;
    };
    const append = (token)=>{
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
    };
    const negate = ()=>{
        let count = 1;
        while(peek() === '!' && (peek(2) !== '(' || peek(3) === '?')){
            advance();
            state.start++;
            count++;
        }
        if (count % 2 === 0) return false;
        state.negated = true;
        state.start++;
        return true;
    };
    const increment = (type)=>{
        state[type]++;
        stack.push(type);
    };
    const decrement = (type)=>{
        state[type]--;
        stack.pop();
    };
    /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */ const push = (tok)=>{
        if (prev.type === 'globstar') {
            const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');
            if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
                state.output = state.output.slice(0, -prev.output.length);
                prev.type = 'star';
                prev.value = '*';
                prev.output = star;
                state.output += prev.output;
            }
        }
        if (extglobs.length && tok.type !== 'paren' && !EXTGLOB_CHARS[tok.value]) extglobs[extglobs.length - 1].inner += tok.value;
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === 'text' && tok.type === 'text') {
            prev.value += tok.value;
            prev.output = (prev.output || '') + tok.value;
            return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
    };
    const extglobOpen = (type, value)=>{
        const token = {
            ...EXTGLOB_CHARS[value],
            conditions: 1,
            inner: ''
        };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? '(' : '') + token.open;
        increment('parens');
        push({
            type: type,
            value: value,
            output: state.output ? '' : ONE_CHAR
        });
        push({
            type: 'paren',
            extglob: true,
            value: advance(),
            output: output
        });
        extglobs.push(token);
    };
    const extglobClose = (token)=>{
        let output = token.close + (opts.capture ? ')' : '');
        if (token.type === 'negate') {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes('/')) extglobStar = globstar(opts);
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) output = token.close = `)$))${extglobStar}`;
            if (token.prev.type === 'bos' && eos()) state.negatedExtglob = true;
        }
        push({
            type: 'paren',
            extglob: true,
            value: value,
            output: output
        });
        decrement('parens');
    };
    /**
   * Fast paths
   */ if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace($f1ba962b40e679f3$var$REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index)=>{
            if (first === '\\') {
                backslashes = true;
                return m;
            }
            if (first === '?') {
                if (esc) return esc + first + (rest ? QMARK.repeat(rest.length) : '');
                if (index === 0) return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
                return QMARK.repeat(chars.length);
            }
            if (first === '.') return DOT_LITERAL.repeat(chars.length);
            if (first === '*') {
                if (esc) return esc + first + (rest ? star : '');
                return star;
            }
            return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
            if (opts.unescape === true) output = output.replace(/\\/g, '');
            else output = output.replace(/\\+/g, (m)=>{
                return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
            });
        }
        if (output === input && opts.contains === true) {
            state.output = input;
            return state;
        }
        state.output = $EOaiL.wrapOutput(output, state, options);
        return state;
    }
    /**
   * Tokenize input until we reach end-of-string
   */ while(!eos()){
        value = advance();
        if (value === '\u0000') continue;
        /**
     * Escaped characters
     */ if (value === '\\') {
            const next = peek();
            if (next === '/' && opts.bash !== true) continue;
            if (next === '.' || next === ';') continue;
            if (!next) {
                value += '\\';
                push({
                    type: 'text',
                    value: value
                });
                continue;
            }
            // collapse slashes to reduce potential for exploits
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
                slashes = match[0].length;
                state.index += slashes;
                if (slashes % 2 !== 0) value += '\\';
            }
            if (opts.unescape === true) value = advance() || '';
            else value += advance() || '';
            if (state.brackets === 0) {
                push({
                    type: 'text',
                    value: value
                });
                continue;
            }
        }
        /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */ if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
            if (opts.posix !== false && value === ':') {
                const inner = prev.value.slice(1);
                if (inner.includes('[')) {
                    prev.posix = true;
                    if (inner.includes(':')) {
                        const idx = prev.value.lastIndexOf('[');
                        const pre = prev.value.slice(0, idx);
                        const rest = prev.value.slice(idx + 2);
                        const posix = $f1ba962b40e679f3$var$POSIX_REGEX_SOURCE[rest];
                        if (posix) {
                            prev.value = pre + posix;
                            state.backtrack = true;
                            advance();
                            if (!bos.output && tokens.indexOf(prev) === 1) bos.output = ONE_CHAR;
                            continue;
                        }
                    }
                }
            }
            if (value === '[' && peek() !== ':' || value === '-' && peek() === ']') value = `\\${value}`;
            if (value === ']' && (prev.value === '[' || prev.value === '[^')) value = `\\${value}`;
            if (opts.posix === true && value === '!' && prev.value === '[') value = '^';
            prev.value += value;
            append({
                value: value
            });
            continue;
        }
        /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */ if (state.quotes === 1 && value !== '"') {
            value = $EOaiL.escapeRegex(value);
            prev.value += value;
            append({
                value: value
            });
            continue;
        }
        /**
     * Double quotes
     */ if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value === '(') {
            increment('parens');
            push({
                type: 'paren',
                value: value
            });
            continue;
        }
        if (value === ')') {
            if (state.parens === 0 && opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('opening', '('));
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
                extglobClose(extglobs.pop());
                continue;
            }
            push({
                type: 'paren',
                value: value,
                output: state.parens ? ')' : '\\)'
            });
            decrement('parens');
            continue;
        }
        /**
     * Square brackets
     */ if (value === '[') {
            if (opts.nobracket === true || !remaining().includes(']')) {
                if (opts.nobracket !== true && opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('closing', ']'));
                value = `\\${value}`;
            } else increment('brackets');
            push({
                type: 'bracket',
                value: value
            });
            continue;
        }
        if (value === ']') {
            if (opts.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
                push({
                    type: 'text',
                    value: value,
                    output: `\\${value}`
                });
                continue;
            }
            if (state.brackets === 0) {
                if (opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('opening', '['));
                push({
                    type: 'text',
                    value: value,
                    output: `\\${value}`
                });
                continue;
            }
            decrement('brackets');
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) value = `/${value}`;
            prev.value += value;
            append({
                value: value
            });
            // when literal brackets are explicitly disabled
            // assume we should match with a regex character class
            if (opts.literalBrackets === false || $EOaiL.hasRegexChars(prevValue)) continue;
            const escaped = $EOaiL.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            // when literal brackets are explicitly enabled
            // assume we should escape the brackets to match literal characters
            if (opts.literalBrackets === true) {
                state.output += escaped;
                prev.value = escaped;
                continue;
            }
            // when the user specifies nothing, try to match both
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
        }
        /**
     * Braces
     */ if (value === '{' && opts.nobrace !== true) {
            increment('braces');
            const open = {
                type: 'brace',
                value: value,
                output: '(',
                outputIndex: state.output.length,
                tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
        }
        if (value === '}') {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
                push({
                    type: 'text',
                    value: value,
                    output: value
                });
                continue;
            }
            let output = ')';
            if (brace.dots === true) {
                const arr = tokens.slice();
                const range = [];
                for(let i = arr.length - 1; i >= 0; i--){
                    tokens.pop();
                    if (arr[i].type === 'brace') break;
                    if (arr[i].type !== 'dots') range.unshift(arr[i].value);
                }
                output = $f1ba962b40e679f3$var$expandRange(range, opts);
                state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
                const out = state.output.slice(0, brace.outputIndex);
                const toks = state.tokens.slice(brace.tokensIndex);
                brace.value = brace.output = '\\{';
                value = output = '\\}';
                state.output = out;
                for (const t of toks)state.output += t.output || t.value;
            }
            push({
                type: 'brace',
                value: value,
                output: output
            });
            decrement('braces');
            braces.pop();
            continue;
        }
        /**
     * Pipes
     */ if (value === '|') {
            if (extglobs.length > 0) extglobs[extglobs.length - 1].conditions++;
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Commas
     */ if (value === ',') {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === 'braces') {
                brace.comma = true;
                output = '|';
            }
            push({
                type: 'comma',
                value: value,
                output: output
            });
            continue;
        }
        /**
     * Slashes
     */ if (value === '/') {
            // if the beginning of the glob is "./", advance the start
            // to the current index, and don't add the "./" characters
            // to the state. This greatly simplifies lookbehinds when
            // checking for BOS characters like "!" and "." (not "./")
            if (prev.type === 'dot' && state.index === state.start + 1) {
                state.start = state.index + 1;
                state.consumed = '';
                state.output = '';
                tokens.pop();
                prev = bos; // reset "prev" to the first token
                continue;
            }
            push({
                type: 'slash',
                value: value,
                output: SLASH_LITERAL
            });
            continue;
        }
        /**
     * Dots
     */ if (value === '.') {
            if (state.braces > 0 && prev.type === 'dot') {
                if (prev.value === '.') prev.output = DOT_LITERAL;
                const brace = braces[braces.length - 1];
                prev.type = 'dots';
                prev.output += value;
                prev.value += value;
                brace.dots = true;
                continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
                push({
                    type: 'text',
                    value: value,
                    output: DOT_LITERAL
                });
                continue;
            }
            push({
                type: 'dot',
                value: value,
                output: DOT_LITERAL
            });
            continue;
        }
        /**
     * Question marks
     */ if (value === '?') {
            const isGroup = prev && prev.value === '(';
            if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('qmark', value);
                continue;
            }
            if (prev && prev.type === 'paren') {
                const next = peek();
                let output = value;
                if (next === '<' && !$EOaiL.supportsLookbehinds()) throw new Error('Node.js v10 or higher is required for regex lookbehinds');
                if (prev.value === '(' && !/[!=<:]/.test(next) || next === '<' && !/<([!=]|\w+>)/.test(remaining())) output = `\\${value}`;
                push({
                    type: 'text',
                    value: value,
                    output: output
                });
                continue;
            }
            if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
                push({
                    type: 'qmark',
                    value: value,
                    output: QMARK_NO_DOT
                });
                continue;
            }
            push({
                type: 'qmark',
                value: value,
                output: QMARK
            });
            continue;
        }
        /**
     * Exclamation
     */ if (value === '!') {
            if (opts.noextglob !== true && peek() === '(') {
                if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
                    extglobOpen('negate', value);
                    continue;
                }
            }
            if (opts.nonegate !== true && state.index === 0) {
                negate();
                continue;
            }
        }
        /**
     * Plus
     */ if (value === '+') {
            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('plus', value);
                continue;
            }
            if (prev && prev.value === '(' || opts.regex === false) {
                push({
                    type: 'plus',
                    value: value,
                    output: PLUS_LITERAL
                });
                continue;
            }
            if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
                push({
                    type: 'plus',
                    value: value
                });
                continue;
            }
            push({
                type: 'plus',
                value: PLUS_LITERAL
            });
            continue;
        }
        /**
     * Plain text
     */ if (value === '@') {
            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                push({
                    type: 'at',
                    extglob: true,
                    value: value,
                    output: ''
                });
                continue;
            }
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Plain text
     */ if (value !== '*') {
            if (value === '$' || value === '^') value = `\\${value}`;
            const match = $f1ba962b40e679f3$var$REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
                value += match[0];
                state.index += match[0].length;
            }
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Stars
     */ if (prev && (prev.type === 'globstar' || prev.star === true)) {
            prev.type = 'star';
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen('star', value);
            continue;
        }
        if (prev.type === 'star') {
            if (opts.noglobstar === true) {
                consume(value);
                continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === 'slash' || prior.type === 'bos';
            const afterStar = before && (before.type === 'star' || before.type === 'globstar');
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
                push({
                    type: 'star',
                    value: value,
                    output: ''
                });
                continue;
            }
            const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
            const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
            if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
                push({
                    type: 'star',
                    value: value,
                    output: ''
                });
                continue;
            }
            // strip consecutive `/**/`
            while(rest.slice(0, 3) === '/**'){
                const after = input[state.index + 4];
                if (after && after !== '/') break;
                rest = rest.slice(3);
                consume('/**', 3);
            }
            if (prior.type === 'bos' && eos()) {
                prev.type = 'globstar';
                prev.value += value;
                prev.output = globstar(opts);
                state.output = prev.output;
                state.globstar = true;
                consume(value);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
                prev.value += value;
                state.globstar = true;
                state.output += prior.output + prev.output;
                consume(value);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
                const end = rest[1] !== void 0 ? '|$' : '';
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
                prev.value += value;
                state.output += prior.output + prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            if (prior.type === 'bos' && rest[0] === '/') {
                prev.type = 'globstar';
                prev.value += value;
                prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
                state.output = prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            // remove single star from output
            state.output = state.output.slice(0, -prev.output.length);
            // reset previous token to globstar
            prev.type = 'globstar';
            prev.output = globstar(opts);
            prev.value += value;
            // reset output with globstar
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
        }
        const token = {
            type: 'star',
            value: value,
            output: star
        };
        if (opts.bash === true) {
            token.output = '.*?';
            if (prev.type === 'bos' || prev.type === 'slash') token.output = nodot + token.output;
            push(token);
            continue;
        }
        if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
        }
        if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
            if (prev.type === 'dot') {
                state.output += NO_DOT_SLASH;
                prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
                state.output += NO_DOTS_SLASH;
                prev.output += NO_DOTS_SLASH;
            } else {
                state.output += nodot;
                prev.output += nodot;
            }
            if (peek() !== '*') {
                state.output += ONE_CHAR;
                prev.output += ONE_CHAR;
            }
        }
        push(token);
    }
    while(state.brackets > 0){
        if (opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('closing', ']'));
        state.output = $EOaiL.escapeLast(state.output, '[');
        decrement('brackets');
    }
    while(state.parens > 0){
        if (opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('closing', ')'));
        state.output = $EOaiL.escapeLast(state.output, '(');
        decrement('parens');
    }
    while(state.braces > 0){
        if (opts.strictBrackets === true) throw new SyntaxError($f1ba962b40e679f3$var$syntaxError('closing', '}'));
        state.output = $EOaiL.escapeLast(state.output, '{');
        decrement('braces');
    }
    if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) push({
        type: 'maybe_slash',
        value: '',
        output: `${SLASH_LITERAL}?`
    });
    // rebuild the output if we had to backtrack at any point
    if (state.backtrack === true) {
        state.output = '';
        for (const token of state.tokens){
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) state.output += token.suffix;
        }
    }
    return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */ $f1ba962b40e679f3$var$parse.fastpaths = (input, options)=>{
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === 'number' ? Math.min($f1ba962b40e679f3$var$MAX_LENGTH, opts.maxLength) : $f1ba962b40e679f3$var$MAX_LENGTH;
    const len = input.length;
    if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    input = $f1ba962b40e679f3$var$REPLACEMENTS[input] || input;
    const win32 = $EOaiL.isWindows(options);
    // create constants based on platform, for windows or posix
    const { DOT_LITERAL: DOT_LITERAL, SLASH_LITERAL: SLASH_LITERAL, ONE_CHAR: ONE_CHAR, DOTS_SLASH: DOTS_SLASH, NO_DOT: NO_DOT, NO_DOTS: NO_DOTS, NO_DOTS_SLASH: NO_DOTS_SLASH, STAR: STAR, START_ANCHOR: START_ANCHOR } = $3LrmG.globChars(win32);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? '' : '?:';
    const state = {
        negated: false,
        prefix: ''
    };
    let star = opts.bash === true ? '.*?' : STAR;
    if (opts.capture) star = `(${star})`;
    const globstar = (opts)=>{
        if (opts.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str)=>{
        switch(str){
            case '*':
                return `${nodot}${ONE_CHAR}${star}`;
            case '.*':
                return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*.*':
                return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*/*':
                return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case '**':
                return nodot + globstar(opts);
            case '**/*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case '**/*.*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '**/.*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default:
                {
                    const match = /^(.*?)\.(\w+)$/.exec(str);
                    if (!match) return;
                    const source = create(match[1]);
                    if (!source) return;
                    return source + DOT_LITERAL + match[2];
                }
        }
    };
    const output = $EOaiL.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) source += `${SLASH_LITERAL}?`;
    return source;
};
module.exports = $f1ba962b40e679f3$var$parse;

});


parcelRegister("cA3NZ", function(module, exports) {
module.exports = JSON.parse("[\"3dm\",\"3ds\",\"3g2\",\"3gp\",\"7z\",\"a\",\"aac\",\"adp\",\"ai\",\"aif\",\"aiff\",\"alz\",\"ape\",\"apk\",\"ar\",\"arj\",\"asf\",\"au\",\"avi\",\"bak\",\"baml\",\"bh\",\"bin\",\"bk\",\"bmp\",\"btif\",\"bz2\",\"bzip2\",\"cab\",\"caf\",\"cgm\",\"class\",\"cmx\",\"cpio\",\"cr2\",\"cur\",\"dat\",\"dcm\",\"deb\",\"dex\",\"djvu\",\"dll\",\"dmg\",\"dng\",\"doc\",\"docm\",\"docx\",\"dot\",\"dotm\",\"dra\",\"DS_Store\",\"dsk\",\"dts\",\"dtshd\",\"dvb\",\"dwg\",\"dxf\",\"ecelp4800\",\"ecelp7470\",\"ecelp9600\",\"egg\",\"eol\",\"eot\",\"epub\",\"exe\",\"f4v\",\"fbs\",\"fh\",\"fla\",\"flac\",\"fli\",\"flv\",\"fpx\",\"fst\",\"fvt\",\"g3\",\"gh\",\"gif\",\"graffle\",\"gz\",\"gzip\",\"h261\",\"h263\",\"h264\",\"icns\",\"ico\",\"ief\",\"img\",\"ipa\",\"iso\",\"jar\",\"jpeg\",\"jpg\",\"jpgv\",\"jpm\",\"jxr\",\"key\",\"ktx\",\"lha\",\"lib\",\"lvp\",\"lz\",\"lzh\",\"lzma\",\"lzo\",\"m3u\",\"m4a\",\"m4v\",\"mar\",\"mdi\",\"mht\",\"mid\",\"midi\",\"mj2\",\"mka\",\"mkv\",\"mmr\",\"mng\",\"mobi\",\"mov\",\"movie\",\"mp3\",\"mp4\",\"mp4a\",\"mpeg\",\"mpg\",\"mpga\",\"mxu\",\"nef\",\"npx\",\"numbers\",\"nupkg\",\"o\",\"oga\",\"ogg\",\"ogv\",\"otf\",\"pages\",\"pbm\",\"pcx\",\"pdb\",\"pdf\",\"pea\",\"pgm\",\"pic\",\"png\",\"pnm\",\"pot\",\"potm\",\"potx\",\"ppa\",\"ppam\",\"ppm\",\"pps\",\"ppsm\",\"ppsx\",\"ppt\",\"pptm\",\"pptx\",\"psd\",\"pya\",\"pyc\",\"pyo\",\"pyv\",\"qt\",\"rar\",\"ras\",\"raw\",\"resources\",\"rgb\",\"rip\",\"rlc\",\"rmf\",\"rmvb\",\"rtf\",\"rz\",\"s3m\",\"s7z\",\"scpt\",\"sgi\",\"shar\",\"sil\",\"sketch\",\"slk\",\"smv\",\"snk\",\"so\",\"stl\",\"suo\",\"sub\",\"swf\",\"tar\",\"tbz\",\"tbz2\",\"tga\",\"tgz\",\"thmx\",\"tif\",\"tiff\",\"tlz\",\"ttc\",\"ttf\",\"txz\",\"udf\",\"uvh\",\"uvi\",\"uvm\",\"uvp\",\"uvs\",\"uvu\",\"viv\",\"vob\",\"war\",\"wav\",\"wax\",\"wbmp\",\"wdp\",\"weba\",\"webm\",\"webp\",\"whl\",\"wim\",\"wm\",\"wma\",\"wmv\",\"wmx\",\"woff\",\"woff2\",\"wrm\",\"wvx\",\"xbm\",\"xif\",\"xla\",\"xlam\",\"xls\",\"xlsb\",\"xlsm\",\"xlsx\",\"xlt\",\"xltm\",\"xltx\",\"xm\",\"xmind\",\"xpi\",\"xpm\",\"xwd\",\"xz\",\"z\",\"zip\",\"zipx\"]");

});


$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $e3844875fba73d3c$export$2e2bcd8739ae039);



var $19aab20b2ea5b99f$exports = {};
'use strict';












$19aab20b2ea5b99f$exports = Object.assign({}, // Export promiseified graceful-fs:
(parcelRequire("5QYQ7")), // Export extra methods:
(parcelRequire("11Sqo")), (parcelRequire("8DRY7")), (parcelRequire("beKrj")), (parcelRequire("5cuhD")), (parcelRequire("cxrxc")), (parcelRequire("ggBMC")), (parcelRequire("I7XCi")), (parcelRequire("ez46y")), (parcelRequire("drLDP")), (parcelRequire("eUzTv")), (parcelRequire("0Fcuf")));

if (Object.getOwnPropertyDescriptor($jobL2$fs, 'promises')) Object.defineProperty($19aab20b2ea5b99f$exports, 'promises', {
    get () {
        return $jobL2$fs.promises;
    }
});


var $771fcff429d55e18$exports = {};

$parcel$export($771fcff429d55e18$exports, "FSWatcher", () => $771fcff429d55e18$export$552f5da8b13f69c4, (v) => $771fcff429d55e18$export$552f5da8b13f69c4 = v);
$parcel$export($771fcff429d55e18$exports, "watch", () => $771fcff429d55e18$export$3db5d71bdb2d5499, (v) => $771fcff429d55e18$export$3db5d71bdb2d5499 = v);
// Export FSWatcher class
var $771fcff429d55e18$export$552f5da8b13f69c4;
var $771fcff429d55e18$export$3db5d71bdb2d5499;
'use strict';

var $771fcff429d55e18$require$EventEmitter = $jobL2$events.EventEmitter;



var $771fcff429d55e18$require$promisify = $jobL2$util.promisify;
var $456741e164e4b362$exports = {};
'use strict';


var $456741e164e4b362$require$Readable = $jobL2$stream.Readable;


var $456741e164e4b362$require$promisify = $jobL2$util.promisify;
var $88a8030404f84cc9$exports = {};
'use strict';

$88a8030404f84cc9$exports = (parcelRequire("10orv"));


const $456741e164e4b362$var$readdir = $456741e164e4b362$require$promisify($jobL2$fs.readdir);
const $456741e164e4b362$var$stat = $456741e164e4b362$require$promisify($jobL2$fs.stat);
const $456741e164e4b362$var$lstat = $456741e164e4b362$require$promisify($jobL2$fs.lstat);
/**
 * @typedef {Object} EntryInfo
 * @property {String} path
 * @property {String} fullPath
 * @property {fs.Stats=} stats
 * @property {fs.Dirent=} dirent
 * @property {String} basename
 */ const $456741e164e4b362$var$BANG = '!';
const $456741e164e4b362$var$NORMAL_FLOW_ERRORS = new Set([
    'ENOENT',
    'EPERM',
    'EACCES',
    'ELOOP'
]);
const $456741e164e4b362$var$FILE_TYPE = 'files';
const $456741e164e4b362$var$DIR_TYPE = 'directories';
const $456741e164e4b362$var$FILE_DIR_TYPE = 'files_directories';
const $456741e164e4b362$var$EVERYTHING_TYPE = 'all';
const $456741e164e4b362$var$ALL_TYPES = [
    $456741e164e4b362$var$FILE_TYPE,
    $456741e164e4b362$var$DIR_TYPE,
    $456741e164e4b362$var$FILE_DIR_TYPE,
    $456741e164e4b362$var$EVERYTHING_TYPE
];
const $456741e164e4b362$var$isNormalFlowError = (error)=>$456741e164e4b362$var$NORMAL_FLOW_ERRORS.has(error.code);
const $456741e164e4b362$var$normalizeFilter = (filter)=>{
    if (filter === undefined) return;
    if (typeof filter === 'function') return filter;
    if (typeof filter === 'string') {
        const glob = $88a8030404f84cc9$exports(filter.trim());
        return (entry)=>glob(entry.basename);
    }
    if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter){
            const trimmed = item.trim();
            if (trimmed.charAt(0) === $456741e164e4b362$var$BANG) negative.push($88a8030404f84cc9$exports(trimmed.slice(1)));
            else positive.push($88a8030404f84cc9$exports(trimmed));
        }
        if (negative.length > 0) {
            if (positive.length > 0) return (entry)=>positive.some((f)=>f(entry.basename)) && !negative.some((f)=>f(entry.basename));
            return (entry)=>!negative.some((f)=>f(entry.basename));
        }
        return (entry)=>positive.some((f)=>f(entry.basename));
    }
};
class $456741e164e4b362$var$ReaddirpStream extends $456741e164e4b362$require$Readable {
    static get defaultOptions() {
        return {
            root: '.',
            /* eslint-disable no-unused-vars */ fileFilter: (path)=>true,
            directoryFilter: (path)=>true,
            /* eslint-enable no-unused-vars */ type: $456741e164e4b362$var$FILE_TYPE,
            lstat: false,
            depth: 2147483648,
            alwaysStat: false
        };
    }
    constructor(options = {}){
        super({
            objectMode: true,
            autoDestroy: true,
            highWaterMark: options.highWaterMark || 4096
        });
        const opts = {
            ...$456741e164e4b362$var$ReaddirpStream.defaultOptions,
            ...options
        };
        const { root: root, type: type } = opts;
        this._fileFilter = $456741e164e4b362$var$normalizeFilter(opts.fileFilter);
        this._directoryFilter = $456741e164e4b362$var$normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? $456741e164e4b362$var$lstat : $456741e164e4b362$var$stat;
        // Use bigint stats if it's windows and stat() supports options (node 10+).
        if (process.platform === 'win32' && $456741e164e4b362$var$stat.length === 3) this._stat = (path)=>statMethod(path, {
                bigint: true
            });
        else this._stat = statMethod;
        this._maxDepth = opts.depth;
        this._wantsDir = [
            $456741e164e4b362$var$DIR_TYPE,
            $456741e164e4b362$var$FILE_DIR_TYPE,
            $456741e164e4b362$var$EVERYTHING_TYPE
        ].includes(type);
        this._wantsFile = [
            $456741e164e4b362$var$FILE_TYPE,
            $456741e164e4b362$var$FILE_DIR_TYPE,
            $456741e164e4b362$var$EVERYTHING_TYPE
        ].includes(type);
        this._wantsEverything = type === $456741e164e4b362$var$EVERYTHING_TYPE;
        this._root = $jobL2$path.resolve(root);
        this._isDirent = 'Dirent' in $jobL2$fs && !opts.alwaysStat;
        this._statsProp = this._isDirent ? 'dirent' : 'stats';
        this._rdOptions = {
            encoding: 'utf8',
            withFileTypes: this._isDirent
        };
        // Launch stream with one parent, the root dir.
        try {
            this.parents = [
                this._exploreDir(root, 1)
            ];
        } catch (error) {
            this.destroy(error);
        }
        this.reading = false;
        this.parent = undefined;
    }
    async _read(batch) {
        if (this.reading) return;
        this.reading = true;
        try {
            while(!this.destroyed && batch > 0){
                const { path: path, depth: depth, files: files = [] } = this.parent || {};
                if (files.length > 0) {
                    const slice = files.splice(0, batch).map((dirent)=>this._formatEntry(dirent, path));
                    for (const entry of (await Promise.all(slice))){
                        if (this._isDirAndMatchesFilter(entry)) {
                            if (depth <= this._maxDepth) this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                            if (this._wantsDir) {
                                this.push(entry);
                                batch--;
                            }
                        } else if (this._isFileAndMatchesFilter(entry)) {
                            if (this._wantsFile) {
                                this.push(entry);
                                batch--;
                            }
                        }
                    }
                } else {
                    const parent = this.parents.pop();
                    if (!parent) {
                        this.push(null);
                        break;
                    }
                    this.parent = await parent;
                }
            }
        } catch (error) {
            this.destroy(error);
        } finally{
            this.reading = false;
        }
    }
    async _exploreDir(path, depth) {
        let files;
        try {
            files = await $456741e164e4b362$var$readdir(path, this._rdOptions);
        } catch (error) {
            this._onError(error);
        }
        return {
            files: files,
            depth: depth,
            path: path
        };
    }
    async _formatEntry(dirent, path) {
        const basename = this._isDirent ? dirent.name : dirent;
        const fullPath = $jobL2$path.resolve($jobL2$path.join(path, basename));
        const entry = {
            path: $jobL2$path.relative(this._root, fullPath),
            fullPath: fullPath,
            basename: basename
        };
        try {
            entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
            this._onError(err);
        }
        return entry;
    }
    _onError(err) {
        if ($456741e164e4b362$var$isNormalFlowError(err) && !this.destroyed) this.emit('warn', err);
        else throw err;
    }
    _isDirAndMatchesFilter(entry) {
        // entry may be undefined, because a warning or an error were emitted
        // and the statsProp is undefined
        const stats = entry && entry[this._statsProp];
        return stats && stats.isDirectory() && this._directoryFilter(entry);
    }
    _isFileAndMatchesFilter(entry) {
        const stats = entry && entry[this._statsProp];
        const isFileType = stats && (this._wantsEverything && !stats.isDirectory() || stats.isFile() || stats.isSymbolicLink());
        return isFileType && this._fileFilter(entry);
    }
}
/**
 * @typedef {Object} ReaddirpArguments
 * @property {Function=} fileFilter
 * @property {Function=} directoryFilter
 * @property {String=} type
 * @property {Number=} depth
 * @property {String=} root
 * @property {Boolean=} lstat
 * @property {Boolean=} bigint
 */ /**
 * Main function which ends up calling readdirRec and reads all files and directories in given root recursively.
 * @param {String} root Root directory
 * @param {ReaddirpArguments=} options Options to specify root (start directory), filters and recursion depth
 */ const $456741e164e4b362$var$readdirp = (root, options = {})=>{
    let type = options.entryType || options.type;
    if (type === 'both') type = $456741e164e4b362$var$FILE_DIR_TYPE; // backwards-compatibility
    if (type) options.type = type;
    if (!root) throw new Error('readdirp: root argument is required. Usage: readdirp(root, options)');
    else if (typeof root !== 'string') throw new TypeError('readdirp: root argument must be a string. Usage: readdirp(root, options)');
    else if (type && !$456741e164e4b362$var$ALL_TYPES.includes(type)) throw new Error(`readdirp: Invalid type passed. Use one of ${$456741e164e4b362$var$ALL_TYPES.join(', ')}`);
    options.root = root;
    return new $456741e164e4b362$var$ReaddirpStream(options);
};
const $456741e164e4b362$var$readdirpPromise = (root, options = {})=>{
    return new Promise((resolve, reject)=>{
        const files = [];
        $456741e164e4b362$var$readdirp(root, options).on('data', (entry)=>files.push(entry)).on('end', ()=>resolve(files)).on('error', (error)=>reject(error));
    });
};
$456741e164e4b362$var$readdirp.promise = $456741e164e4b362$var$readdirpPromise;
$456741e164e4b362$var$readdirp.ReaddirpStream = $456741e164e4b362$var$ReaddirpStream;
$456741e164e4b362$var$readdirp.default = $456741e164e4b362$var$readdirp;
$456741e164e4b362$exports = $456741e164e4b362$var$readdirp;


var $f5959669493a446c$exports = {};
'use strict';
Object.defineProperty($f5959669493a446c$exports, "__esModule", {
    value: true
});

var $ed97ceaedff2b272$exports = {};
/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */ $ed97ceaedff2b272$exports = function(path, stripTrailing) {
    if (typeof path !== 'string') throw new TypeError('expected path to be a string');
    if (path === '\\' || path === '/') return '/';
    var len = path.length;
    if (len <= 1) return path;
    // ensure that win32 namespaces has two leading slashes, so that the path is
    // handled properly by the win32 version of path.parse() after being normalized
    // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
    var prefix = '';
    if (len > 4 && path[3] === '\\') {
        var ch = path[2];
        if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
            path = path.slice(2);
            prefix = '//';
        }
    }
    var segs = path.split(/[/\\]+/);
    if (stripTrailing !== false && segs[segs.length - 1] === '') segs.pop();
    return prefix + segs.join('/');
};


/**
 * @typedef {(testString: string) => boolean} AnymatchFn
 * @typedef {string|RegExp|AnymatchFn} AnymatchPattern
 * @typedef {AnymatchPattern|AnymatchPattern[]} AnymatchMatcher
 */ const $f5959669493a446c$var$BANG = '!';
const $f5959669493a446c$var$DEFAULT_OPTIONS = {
    returnIndex: false
};
const $f5959669493a446c$var$arrify = (item)=>Array.isArray(item) ? item : [
        item
    ];
/**
 * @param {AnymatchPattern} matcher
 * @param {object} options
 * @returns {AnymatchFn}
 */ const $f5959669493a446c$var$createPattern = (matcher, options)=>{
    if (typeof matcher === 'function') return matcher;
    if (typeof matcher === 'string') {
        const glob = $88a8030404f84cc9$exports(matcher, options);
        return (string)=>matcher === string || glob(string);
    }
    if (matcher instanceof RegExp) return (string)=>matcher.test(string);
    return (string)=>false;
};
/**
 * @param {Array<Function>} patterns
 * @param {Array<Function>} negPatterns
 * @param {String|Array} args
 * @param {Boolean} returnIndex
 * @returns {boolean|number}
 */ const $f5959669493a446c$var$matchPatterns = (patterns, negPatterns, args, returnIndex)=>{
    const isList = Array.isArray(args);
    const _path = isList ? args[0] : args;
    if (!isList && typeof _path !== 'string') throw new TypeError('anymatch: second argument must be a string: got ' + Object.prototype.toString.call(_path));
    const path = $ed97ceaedff2b272$exports(_path);
    for(let index = 0; index < negPatterns.length; index++){
        const nglob = negPatterns[index];
        if (nglob(path)) return returnIndex ? -1 : false;
    }
    const applied = isList && [
        path
    ].concat(args.slice(1));
    for(let index = 0; index < patterns.length; index++){
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path)) return returnIndex ? index : true;
    }
    return returnIndex ? -1 : false;
};
/**
 * @param {AnymatchMatcher} matchers
 * @param {Array|string} testString
 * @param {object} options
 * @returns {boolean|number|Function}
 */ const $f5959669493a446c$var$anymatch = (matchers, testString, options = $f5959669493a446c$var$DEFAULT_OPTIONS)=>{
    if (matchers == null) throw new TypeError('anymatch: specify first argument');
    const opts = typeof options === 'boolean' ? {
        returnIndex: options
    } : options;
    const returnIndex = opts.returnIndex || false;
    // Early cache for matchers.
    const mtchers = $f5959669493a446c$var$arrify(matchers);
    const negatedGlobs = mtchers.filter((item)=>typeof item === 'string' && item.charAt(0) === $f5959669493a446c$var$BANG).map((item)=>item.slice(1)).map((item)=>$88a8030404f84cc9$exports(item, opts));
    const patterns = mtchers.map((matcher)=>$f5959669493a446c$var$createPattern(matcher, opts));
    if (testString == null) return (testString, ri = false)=>{
        const returnIndex = typeof ri === 'boolean' ? ri : false;
        return $f5959669493a446c$var$matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    return $f5959669493a446c$var$matchPatterns(patterns, negatedGlobs, testString, returnIndex);
};
$f5959669493a446c$var$anymatch.default = $f5959669493a446c$var$anymatch;
$f5959669493a446c$exports = $f5959669493a446c$var$anymatch;


var $771fcff429d55e18$require$anymatch = $f5959669493a446c$exports.default;
var $461032e8f4d19019$exports = {};
'use strict';
var $d77d7e0710dd8be2$exports = {};
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var $4c83710894c754ef$exports = {};
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */ $4c83710894c754ef$exports = function isExtglob(str) {
    if (typeof str !== 'string' || str === '') return false;
    var match;
    while(match = /(\\).|([@?!+*]\(.*\))/g.exec(str)){
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
    }
    return false;
};


var $d77d7e0710dd8be2$var$chars = {
    '{': '}',
    '(': ')',
    '[': ']'
};
var $d77d7e0710dd8be2$var$strictCheck = function(str) {
    if (str[0] === '!') return true;
    var index = 0;
    var pipeIndex = -2;
    var closeSquareIndex = -2;
    var closeCurlyIndex = -2;
    var closeParenIndex = -2;
    var backSlashIndex = -2;
    while(index < str.length){
        if (str[index] === '*') return true;
        if (str[index + 1] === '?' && /[\].+)]/.test(str[index])) return true;
        if (closeSquareIndex !== -1 && str[index] === '[' && str[index + 1] !== ']') {
            if (closeSquareIndex < index) closeSquareIndex = str.indexOf(']', index);
            if (closeSquareIndex > index) {
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) return true;
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) return true;
            }
        }
        if (closeCurlyIndex !== -1 && str[index] === '{' && str[index + 1] !== '}') {
            closeCurlyIndex = str.indexOf('}', index);
            if (closeCurlyIndex > index) {
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) return true;
            }
        }
        if (closeParenIndex !== -1 && str[index] === '(' && str[index + 1] === '?' && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ')') {
            closeParenIndex = str.indexOf(')', index);
            if (closeParenIndex > index) {
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) return true;
            }
        }
        if (pipeIndex !== -1 && str[index] === '(' && str[index + 1] !== '|') {
            if (pipeIndex < index) pipeIndex = str.indexOf('|', index);
            if (pipeIndex !== -1 && str[pipeIndex + 1] !== ')') {
                closeParenIndex = str.indexOf(')', pipeIndex);
                if (closeParenIndex > pipeIndex) {
                    backSlashIndex = str.indexOf('\\', pipeIndex);
                    if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) return true;
                }
            }
        }
        if (str[index] === '\\') {
            var open = str[index + 1];
            index += 2;
            var close = $d77d7e0710dd8be2$var$chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) index = n + 1;
            }
            if (str[index] === '!') return true;
        } else index++;
    }
    return false;
};
var $d77d7e0710dd8be2$var$relaxedCheck = function(str) {
    if (str[0] === '!') return true;
    var index = 0;
    while(index < str.length){
        if (/[*?{}()[\]]/.test(str[index])) return true;
        if (str[index] === '\\') {
            var open = str[index + 1];
            index += 2;
            var close = $d77d7e0710dd8be2$var$chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) index = n + 1;
            }
            if (str[index] === '!') return true;
        } else index++;
    }
    return false;
};
$d77d7e0710dd8be2$exports = function isGlob(str, options) {
    if (typeof str !== 'string' || str === '') return false;
    if ($4c83710894c754ef$exports(str)) return true;
    var check = $d77d7e0710dd8be2$var$strictCheck;
    // optionally relax check
    if (options && options.strict === false) check = $d77d7e0710dd8be2$var$relaxedCheck;
    return check(str);
};



var $461032e8f4d19019$var$pathPosixDirname = $jobL2$path.posix.dirname;

var $461032e8f4d19019$var$isWin32 = $jobL2$os.platform() === 'win32';
var $461032e8f4d19019$var$slash = '/';
var $461032e8f4d19019$var$backslash = /\\/g;
var $461032e8f4d19019$var$enclosure = /[\{\[].*[\}\]]$/;
var $461032e8f4d19019$var$globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var $461032e8f4d19019$var$escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 * @returns {string}
 */ $461032e8f4d19019$exports = function globParent(str, opts) {
    var options = Object.assign({
        flipBackslashes: true
    }, opts);
    // flip windows path separators
    if (options.flipBackslashes && $461032e8f4d19019$var$isWin32 && str.indexOf($461032e8f4d19019$var$slash) < 0) str = str.replace($461032e8f4d19019$var$backslash, $461032e8f4d19019$var$slash);
    // special case for strings ending in enclosure containing path separator
    if ($461032e8f4d19019$var$enclosure.test(str)) str += $461032e8f4d19019$var$slash;
    // preserves full path in case of trailing path separator
    str += 'a';
    // remove path parts that are globby
    do str = $461032e8f4d19019$var$pathPosixDirname(str);
    while ($d77d7e0710dd8be2$exports(str) || $461032e8f4d19019$var$globby.test(str));
    // remove escape chars and return result
    return str.replace($461032e8f4d19019$var$escaped, '$1');
};



var $c84f2449aa2b11a5$exports = {};
'use strict';
var $67a1d0fc45881091$exports = {};
'use strict';
var $d45be79e62735f49$export$a287f47fed4544b8;
/**
 * Find a node of the given type
 */ var $d45be79e62735f49$export$71aa6c912b956294;
/**
 * Find a node of the given type
 */ var $d45be79e62735f49$export$fbadac39f36b1e16;
/**
 * Escape the given node with '\\' before node.value
 */ var $d45be79e62735f49$export$92e39b1e2c1e6e56;
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */ var $d45be79e62735f49$export$ea0f721b77fd5acc;
/**
 * Returns true if a brace node is invalid.
 */ var $d45be79e62735f49$export$25a78c310c11373f;
/**
 * Returns true if a node is an open or close node
 */ var $d45be79e62735f49$export$582fc44003e67ec6;
/**
 * Reduce an array of text nodes.
 */ var $d45be79e62735f49$export$533b26079ad0b4b;
/**
 * Flatten an array
 */ var $d45be79e62735f49$export$bffa455ba8c619a6;
'use strict';
$d45be79e62735f49$export$a287f47fed4544b8 = (num)=>{
    if (typeof num === 'number') return Number.isInteger(num);
    if (typeof num === 'string' && num.trim() !== '') return Number.isInteger(Number(num));
    return false;
};
$d45be79e62735f49$export$71aa6c912b956294 = (node, type)=>node.nodes.find((node)=>node.type === type);
$d45be79e62735f49$export$fbadac39f36b1e16 = (min, max, step = 1, limit)=>{
    if (limit === false) return false;
    if (!$d45be79e62735f49$export$a287f47fed4544b8(min) || !$d45be79e62735f49$export$a287f47fed4544b8(max)) return false;
    return (Number(max) - Number(min)) / Number(step) >= limit;
};
$d45be79e62735f49$export$92e39b1e2c1e6e56 = (block, n = 0, type)=>{
    const node = block.nodes[n];
    if (!node) return;
    if (type && node.type === type || node.type === 'open' || node.type === 'close') {
        if (node.escaped !== true) {
            node.value = '\\' + node.value;
            node.escaped = true;
        }
    }
};
$d45be79e62735f49$export$ea0f721b77fd5acc = (node)=>{
    if (node.type !== 'brace') return false;
    if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
    }
    return false;
};
$d45be79e62735f49$export$25a78c310c11373f = (block)=>{
    if (block.type !== 'brace') return false;
    if (block.invalid === true || block.dollar) return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
    }
    if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
    }
    return false;
};
$d45be79e62735f49$export$582fc44003e67ec6 = (node)=>{
    if (node.type === 'open' || node.type === 'close') return true;
    return node.open === true || node.close === true;
};
$d45be79e62735f49$export$533b26079ad0b4b = (nodes)=>nodes.reduce((acc, node)=>{
        if (node.type === 'text') acc.push(node.value);
        if (node.type === 'range') node.type = 'text';
        return acc;
    }, []);
$d45be79e62735f49$export$bffa455ba8c619a6 = (...args)=>{
    const result = [];
    const flat = (arr)=>{
        for(let i = 0; i < arr.length; i++){
            const ele = arr[i];
            if (Array.isArray(ele)) {
                flat(ele);
                continue;
            }
            if (ele !== undefined) result.push(ele);
        }
        return result;
    };
    flat(args);
    return result;
};


$67a1d0fc45881091$exports = (ast, options = {})=>{
    const stringify = (node, parent = {})=>{
        const invalidBlock = options.escapeInvalid && $d45be79e62735f49$export$25a78c310c11373f(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = '';
        if (node.value) {
            if ((invalidBlock || invalidNode) && $d45be79e62735f49$export$582fc44003e67ec6(node)) return '\\' + node.value;
            return node.value;
        }
        if (node.value) return node.value;
        if (node.nodes) for (const child of node.nodes)output += stringify(child);
        return output;
    };
    return stringify(ast);
};


var $28eda6522df6e82d$exports = {};
'use strict';
var $74d56790e2d2540e$exports = {};
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */ 'use strict';

var $fee0c30a97ab6bb9$exports = {};
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 'use strict';
var $2db5d2bffda42345$exports = {};
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 'use strict';
$2db5d2bffda42345$exports = function(num) {
    if (typeof num === 'number') return num - num === 0;
    if (typeof num === 'string' && num.trim() !== '') return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    return false;
};


const $fee0c30a97ab6bb9$var$toRegexRange = (min, max, options)=>{
    if ($2db5d2bffda42345$exports(min) === false) throw new TypeError('toRegexRange: expected the first argument to be a number');
    if (max === void 0 || min === max) return String(min);
    if ($2db5d2bffda42345$exports(max) === false) throw new TypeError('toRegexRange: expected the second argument to be a number.');
    let opts = {
        relaxZeros: true,
        ...options
    };
    if (typeof opts.strictZeros === 'boolean') opts.relaxZeros = opts.strictZeros === false;
    let relax = String(opts.relaxZeros);
    let shorthand = String(opts.shorthand);
    let capture = String(opts.capture);
    let wrap = String(opts.wrap);
    let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;
    if ($fee0c30a97ab6bb9$var$toRegexRange.cache.hasOwnProperty(cacheKey)) return $fee0c30a97ab6bb9$var$toRegexRange.cache[cacheKey].result;
    let a = Math.min(min, max);
    let b = Math.max(min, max);
    if (Math.abs(a - b) === 1) {
        let result = min + '|' + max;
        if (opts.capture) return `(${result})`;
        if (opts.wrap === false) return result;
        return `(?:${result})`;
    }
    let isPadded = $fee0c30a97ab6bb9$var$hasPadding(min) || $fee0c30a97ab6bb9$var$hasPadding(max);
    let state = {
        min: min,
        max: max,
        a: a,
        b: b
    };
    let positives = [];
    let negatives = [];
    if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
    }
    if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = $fee0c30a97ab6bb9$var$splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
    }
    if (b >= 0) positives = $fee0c30a97ab6bb9$var$splitToPatterns(a, b, state, opts);
    state.negatives = negatives;
    state.positives = positives;
    state.result = $fee0c30a97ab6bb9$var$collatePatterns(negatives, positives, opts);
    if (opts.capture === true) state.result = `(${state.result})`;
    else if (opts.wrap !== false && positives.length + negatives.length > 1) state.result = `(?:${state.result})`;
    $fee0c30a97ab6bb9$var$toRegexRange.cache[cacheKey] = state;
    return state.result;
};
function $fee0c30a97ab6bb9$var$collatePatterns(neg, pos, options) {
    let onlyNegative = $fee0c30a97ab6bb9$var$filterPatterns(neg, pos, '-', false, options) || [];
    let onlyPositive = $fee0c30a97ab6bb9$var$filterPatterns(pos, neg, '', false, options) || [];
    let intersected = $fee0c30a97ab6bb9$var$filterPatterns(neg, pos, '-?', true, options) || [];
    let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
    return subpatterns.join('|');
}
function $fee0c30a97ab6bb9$var$splitToRanges(min, max) {
    let nines = 1;
    let zeros = 1;
    let stop = $fee0c30a97ab6bb9$var$countNines(min, nines);
    let stops = new Set([
        max
    ]);
    while(min <= stop && stop <= max){
        stops.add(stop);
        nines += 1;
        stop = $fee0c30a97ab6bb9$var$countNines(min, nines);
    }
    stop = $fee0c30a97ab6bb9$var$countZeros(max + 1, zeros) - 1;
    while(min < stop && stop <= max){
        stops.add(stop);
        zeros += 1;
        stop = $fee0c30a97ab6bb9$var$countZeros(max + 1, zeros) - 1;
    }
    stops = [
        ...stops
    ];
    stops.sort($fee0c30a97ab6bb9$var$compare);
    return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */ function $fee0c30a97ab6bb9$var$rangeToPattern(start, stop, options) {
    if (start === stop) return {
        pattern: start,
        count: [],
        digits: 0
    };
    let zipped = $fee0c30a97ab6bb9$var$zip(start, stop);
    let digits = zipped.length;
    let pattern = '';
    let count = 0;
    for(let i = 0; i < digits; i++){
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) pattern += startDigit;
        else if (startDigit !== '0' || stopDigit !== '9') pattern += $fee0c30a97ab6bb9$var$toCharacterClass(startDigit, stopDigit, options);
        else count++;
    }
    if (count) pattern += options.shorthand === true ? '\\d' : '[0-9]';
    return {
        pattern: pattern,
        count: [
            count
        ],
        digits: digits
    };
}
function $fee0c30a97ab6bb9$var$splitToPatterns(min, max, tok, options) {
    let ranges = $fee0c30a97ab6bb9$var$splitToRanges(min, max);
    let tokens = [];
    let start = min;
    let prev;
    for(let i = 0; i < ranges.length; i++){
        let max = ranges[i];
        let obj = $fee0c30a97ab6bb9$var$rangeToPattern(String(start), String(max), options);
        let zeros = '';
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) prev.count.pop();
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + $fee0c30a97ab6bb9$var$toQuantifier(prev.count);
            start = max + 1;
            continue;
        }
        if (tok.isPadded) zeros = $fee0c30a97ab6bb9$var$padZeros(max, tok, options);
        obj.string = zeros + obj.pattern + $fee0c30a97ab6bb9$var$toQuantifier(obj.count);
        tokens.push(obj);
        start = max + 1;
        prev = obj;
    }
    return tokens;
}
function $fee0c30a97ab6bb9$var$filterPatterns(arr, comparison, prefix, intersection, options) {
    let result = [];
    for (let ele of arr){
        let { string: string } = ele;
        // only push if _both_ are negative...
        if (!intersection && !$fee0c30a97ab6bb9$var$contains(comparison, 'string', string)) result.push(prefix + string);
        // or _both_ are positive
        if (intersection && $fee0c30a97ab6bb9$var$contains(comparison, 'string', string)) result.push(prefix + string);
    }
    return result;
}
/**
 * Zip strings
 */ function $fee0c30a97ab6bb9$var$zip(a, b) {
    let arr = [];
    for(let i = 0; i < a.length; i++)arr.push([
        a[i],
        b[i]
    ]);
    return arr;
}
function $fee0c30a97ab6bb9$var$compare(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}
function $fee0c30a97ab6bb9$var$contains(arr, key, val) {
    return arr.some((ele)=>ele[key] === val);
}
function $fee0c30a97ab6bb9$var$countNines(min, len) {
    return Number(String(min).slice(0, -len) + '9'.repeat(len));
}
function $fee0c30a97ab6bb9$var$countZeros(integer, zeros) {
    return integer - integer % Math.pow(10, zeros);
}
function $fee0c30a97ab6bb9$var$toQuantifier(digits) {
    let [start = 0, stop = ''] = digits;
    if (stop || start > 1) return `{${start + (stop ? ',' + stop : '')}}`;
    return '';
}
function $fee0c30a97ab6bb9$var$toCharacterClass(a, b, options) {
    return `[${a}${b - a === 1 ? '' : '-'}${b}]`;
}
function $fee0c30a97ab6bb9$var$hasPadding(str) {
    return /^-?(0+)\d/.test(str);
}
function $fee0c30a97ab6bb9$var$padZeros(value, tok, options) {
    if (!tok.isPadded) return value;
    let diff = Math.abs(tok.maxLen - String(value).length);
    let relax = options.relaxZeros !== false;
    switch(diff){
        case 0:
            return '';
        case 1:
            return relax ? '0?' : '0';
        case 2:
            return relax ? '0{0,2}' : '00';
        default:
            return relax ? `0{0,${diff}}` : `0{${diff}}`;
    }
}
/**
 * Cache
 */ $fee0c30a97ab6bb9$var$toRegexRange.cache = {};
$fee0c30a97ab6bb9$var$toRegexRange.clearCache = ()=>$fee0c30a97ab6bb9$var$toRegexRange.cache = {};
/**
 * Expose `toRegexRange`
 */ $fee0c30a97ab6bb9$exports = $fee0c30a97ab6bb9$var$toRegexRange;


const $74d56790e2d2540e$var$isObject = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val);
const $74d56790e2d2540e$var$transform = (toNumber)=>{
    return (value)=>toNumber === true ? Number(value) : String(value);
};
const $74d56790e2d2540e$var$isValidValue = (value)=>{
    return typeof value === 'number' || typeof value === 'string' && value !== '';
};
const $74d56790e2d2540e$var$isNumber = (num)=>Number.isInteger(+num);
const $74d56790e2d2540e$var$zeros = (input)=>{
    let value = `${input}`;
    let index = -1;
    if (value[0] === '-') value = value.slice(1);
    if (value === '0') return false;
    while(value[++index] === '0');
    return index > 0;
};
const $74d56790e2d2540e$var$stringify = (start, end, options)=>{
    if (typeof start === 'string' || typeof end === 'string') return true;
    return options.stringify === true;
};
const $74d56790e2d2540e$var$pad = (input, maxLength, toNumber)=>{
    if (maxLength > 0) {
        let dash = input[0] === '-' ? '-' : '';
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
    }
    if (toNumber === false) return String(input);
    return input;
};
const $74d56790e2d2540e$var$toMaxLen = (input, maxLength)=>{
    let negative = input[0] === '-' ? '-' : '';
    if (negative) {
        input = input.slice(1);
        maxLength--;
    }
    while(input.length < maxLength)input = '0' + input;
    return negative ? '-' + input : input;
};
const $74d56790e2d2540e$var$toSequence = (parts, options, maxLen)=>{
    parts.negatives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    parts.positives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    let prefix = options.capture ? '' : '?:';
    let positives = '';
    let negatives = '';
    let result;
    if (parts.positives.length) positives = parts.positives.map((v)=>$74d56790e2d2540e$var$toMaxLen(String(v), maxLen)).join('|');
    if (parts.negatives.length) negatives = `-(${prefix}${parts.negatives.map((v)=>$74d56790e2d2540e$var$toMaxLen(String(v), maxLen)).join('|')})`;
    if (positives && negatives) result = `${positives}|${negatives}`;
    else result = positives || negatives;
    if (options.wrap) return `(${prefix}${result})`;
    return result;
};
const $74d56790e2d2540e$var$toRange = (a, b, isNumbers, options)=>{
    if (isNumbers) return $fee0c30a97ab6bb9$exports(a, b, {
        wrap: false,
        ...options
    });
    let start = String.fromCharCode(a);
    if (a === b) return start;
    let stop = String.fromCharCode(b);
    return `[${start}-${stop}]`;
};
const $74d56790e2d2540e$var$toRegex = (start, end, options)=>{
    if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? '' : '?:';
        return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
    }
    return $fee0c30a97ab6bb9$exports(start, end, options);
};
const $74d56790e2d2540e$var$rangeError = (...args)=>{
    return new RangeError('Invalid range arguments: ' + $jobL2$util.inspect(...args));
};
const $74d56790e2d2540e$var$invalidRange = (start, end, options)=>{
    if (options.strictRanges === true) throw $74d56790e2d2540e$var$rangeError([
        start,
        end
    ]);
    return [];
};
const $74d56790e2d2540e$var$invalidStep = (step, options)=>{
    if (options.strictRanges === true) throw new TypeError(`Expected step "${step}" to be a number`);
    return [];
};
const $74d56790e2d2540e$var$fillNumbers = (start, end, step = 1, options = {})=>{
    let a = Number(start);
    let b = Number(end);
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw $74d56790e2d2540e$var$rangeError([
            start,
            end
        ]);
        return [];
    }
    // fix negative zero
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    let descending = a > b;
    let startString = String(start);
    let endString = String(end);
    let stepString = String(step);
    step = Math.max(Math.abs(step), 1);
    let padded = $74d56790e2d2540e$var$zeros(startString) || $74d56790e2d2540e$var$zeros(endString) || $74d56790e2d2540e$var$zeros(stepString);
    let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
    let toNumber = padded === false && $74d56790e2d2540e$var$stringify(start, end, options) === false;
    let format = options.transform || $74d56790e2d2540e$var$transform(toNumber);
    if (options.toRegex && step === 1) return $74d56790e2d2540e$var$toRange($74d56790e2d2540e$var$toMaxLen(start, maxLen), $74d56790e2d2540e$var$toMaxLen(end, maxLen), true, options);
    let parts = {
        negatives: [],
        positives: []
    };
    let push = (num)=>parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        if (options.toRegex === true && step > 1) push(a);
        else range.push($74d56790e2d2540e$var$pad(format(a, index), maxLen, toNumber));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) return step > 1 ? $74d56790e2d2540e$var$toSequence(parts, options, maxLen) : $74d56790e2d2540e$var$toRegex(range, null, {
        wrap: false,
        ...options
    });
    return range;
};
const $74d56790e2d2540e$var$fillLetters = (start, end, step = 1, options = {})=>{
    if (!$74d56790e2d2540e$var$isNumber(start) && start.length > 1 || !$74d56790e2d2540e$var$isNumber(end) && end.length > 1) return $74d56790e2d2540e$var$invalidRange(start, end, options);
    let format = options.transform || ((val)=>String.fromCharCode(val));
    let a = `${start}`.charCodeAt(0);
    let b = `${end}`.charCodeAt(0);
    let descending = a > b;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (options.toRegex && step === 1) return $74d56790e2d2540e$var$toRange(min, max, false, options);
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) return $74d56790e2d2540e$var$toRegex(range, null, {
        wrap: false,
        options: options
    });
    return range;
};
const $74d56790e2d2540e$var$fill = (start, end, step, options = {})=>{
    if (end == null && $74d56790e2d2540e$var$isValidValue(start)) return [
        start
    ];
    if (!$74d56790e2d2540e$var$isValidValue(start) || !$74d56790e2d2540e$var$isValidValue(end)) return $74d56790e2d2540e$var$invalidRange(start, end, options);
    if (typeof step === 'function') return $74d56790e2d2540e$var$fill(start, end, 1, {
        transform: step
    });
    if ($74d56790e2d2540e$var$isObject(step)) return $74d56790e2d2540e$var$fill(start, end, 0, step);
    let opts = {
        ...options
    };
    if (opts.capture === true) opts.wrap = true;
    step = step || opts.step || 1;
    if (!$74d56790e2d2540e$var$isNumber(step)) {
        if (step != null && !$74d56790e2d2540e$var$isObject(step)) return $74d56790e2d2540e$var$invalidStep(step, opts);
        return $74d56790e2d2540e$var$fill(start, end, 1, step);
    }
    if ($74d56790e2d2540e$var$isNumber(start) && $74d56790e2d2540e$var$isNumber(end)) return $74d56790e2d2540e$var$fillNumbers(start, end, step, opts);
    return $74d56790e2d2540e$var$fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
$74d56790e2d2540e$exports = $74d56790e2d2540e$var$fill;



const $28eda6522df6e82d$var$compile = (ast, options = {})=>{
    const walk = (node, parent = {})=>{
        const invalidBlock = $d45be79e62735f49$export$25a78c310c11373f(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? '\\' : '';
        let output = '';
        if (node.isOpen === true) return prefix + node.value;
        if (node.isClose === true) {
            console.log('node.isClose', prefix, node.value);
            return prefix + node.value;
        }
        if (node.type === 'open') return invalid ? prefix + node.value : '(';
        if (node.type === 'close') return invalid ? prefix + node.value : ')';
        if (node.type === 'comma') return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
        if (node.value) return node.value;
        if (node.nodes && node.ranges > 0) {
            const args = $d45be79e62735f49$export$533b26079ad0b4b(node.nodes);
            const range = $74d56790e2d2540e$exports(...args, {
                ...options,
                wrap: false,
                toRegex: true,
                strictZeros: true
            });
            if (range.length !== 0) return args.length > 1 && range.length > 1 ? `(${range})` : range;
        }
        if (node.nodes) for (const child of node.nodes)output += walk(child, node);
        return output;
    };
    return walk(ast);
};
$28eda6522df6e82d$exports = $28eda6522df6e82d$var$compile;


var $094ee55f11d258da$exports = {};
'use strict';



const $094ee55f11d258da$var$append = (queue = '', stash = '', enclose = false)=>{
    const result = [];
    queue = [].concat(queue);
    stash = [].concat(stash);
    if (!stash.length) return queue;
    if (!queue.length) return enclose ? $d45be79e62735f49$export$bffa455ba8c619a6(stash).map((ele)=>`{${ele}}`) : stash;
    for (const item of queue){
        if (Array.isArray(item)) for (const value of item)result.push($094ee55f11d258da$var$append(value, stash, enclose));
        else for (let ele of stash){
            if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? $094ee55f11d258da$var$append(item, ele, enclose) : item + ele);
        }
    }
    return $d45be79e62735f49$export$bffa455ba8c619a6(result);
};
const $094ee55f11d258da$var$expand = (ast, options = {})=>{
    const rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;
    const walk = (node, parent = {})=>{
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while(p.type !== 'brace' && p.type !== 'root' && p.parent){
            p = p.parent;
            q = p.queue;
        }
        if (node.invalid || node.dollar) {
            q.push($094ee55f11d258da$var$append(q.pop(), $67a1d0fc45881091$exports(node, options)));
            return;
        }
        if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
            q.push($094ee55f11d258da$var$append(q.pop(), [
                '{}'
            ]));
            return;
        }
        if (node.nodes && node.ranges > 0) {
            const args = $d45be79e62735f49$export$533b26079ad0b4b(node.nodes);
            if ($d45be79e62735f49$export$fbadac39f36b1e16(...args, options.step, rangeLimit)) throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
            let range = $74d56790e2d2540e$exports(...args, options);
            if (range.length === 0) range = $67a1d0fc45881091$exports(node, options);
            q.push($094ee55f11d258da$var$append(q.pop(), range));
            node.nodes = [];
            return;
        }
        const enclose = $d45be79e62735f49$export$ea0f721b77fd5acc(node);
        let queue = node.queue;
        let block = node;
        while(block.type !== 'brace' && block.type !== 'root' && block.parent){
            block = block.parent;
            queue = block.queue;
        }
        for(let i = 0; i < node.nodes.length; i++){
            const child = node.nodes[i];
            if (child.type === 'comma' && node.type === 'brace') {
                if (i === 1) queue.push('');
                queue.push('');
                continue;
            }
            if (child.type === 'close') {
                q.push($094ee55f11d258da$var$append(q.pop(), queue, enclose));
                continue;
            }
            if (child.value && child.type !== 'open') {
                queue.push($094ee55f11d258da$var$append(queue.pop(), child.value));
                continue;
            }
            if (child.nodes) walk(child, node);
        }
        return queue;
    };
    return $d45be79e62735f49$export$bffa455ba8c619a6(walk(ast));
};
$094ee55f11d258da$exports = $094ee55f11d258da$var$expand;


var $82ad6d83e7d16e70$exports = {};
'use strict';

var $8198d1a489c5883e$exports = {};
'use strict';
$8198d1a489c5883e$exports = {
    MAX_LENGTH: 10000,
    // Digits
    CHAR_0: '0',
    /* 0 */ CHAR_9: '9',
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 'A',
    /* A */ CHAR_LOWERCASE_A: 'a',
    /* a */ CHAR_UPPERCASE_Z: 'Z',
    /* Z */ CHAR_LOWERCASE_Z: 'z',
    /* z */ CHAR_LEFT_PARENTHESES: '(',
    /* ( */ CHAR_RIGHT_PARENTHESES: ')',
    /* ) */ CHAR_ASTERISK: '*',
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: '&',
    /* & */ CHAR_AT: '@',
    /* @ */ CHAR_BACKSLASH: '\\',
    /* \ */ CHAR_BACKTICK: '`',
    /* ` */ CHAR_CARRIAGE_RETURN: '\r',
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: '^',
    /* ^ */ CHAR_COLON: ':',
    /* : */ CHAR_COMMA: ',',
    /* , */ CHAR_DOLLAR: '$',
    /* . */ CHAR_DOT: '.',
    /* . */ CHAR_DOUBLE_QUOTE: '"',
    /* " */ CHAR_EQUAL: '=',
    /* = */ CHAR_EXCLAMATION_MARK: '!',
    /* ! */ CHAR_FORM_FEED: '\f',
    /* \f */ CHAR_FORWARD_SLASH: '/',
    /* / */ CHAR_HASH: '#',
    /* # */ CHAR_HYPHEN_MINUS: '-',
    /* - */ CHAR_LEFT_ANGLE_BRACKET: '<',
    /* < */ CHAR_LEFT_CURLY_BRACE: '{',
    /* { */ CHAR_LEFT_SQUARE_BRACKET: '[',
    /* [ */ CHAR_LINE_FEED: '\n',
    /* \n */ CHAR_NO_BREAK_SPACE: '\u00A0',
    /* \u00A0 */ CHAR_PERCENT: '%',
    /* % */ CHAR_PLUS: '+',
    /* + */ CHAR_QUESTION_MARK: '?',
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: '>',
    /* > */ CHAR_RIGHT_CURLY_BRACE: '}',
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: ']',
    /* ] */ CHAR_SEMICOLON: ';',
    /* ; */ CHAR_SINGLE_QUOTE: '\'',
    /* ' */ CHAR_SPACE: ' ',
    /*   */ CHAR_TAB: '\t',
    /* \t */ CHAR_UNDERSCORE: '_',
    /* _ */ CHAR_VERTICAL_LINE: '|',
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF' /* \uFEFF */ 
};


var $82ad6d83e7d16e70$require$MAX_LENGTH = $8198d1a489c5883e$exports.MAX_LENGTH;
var $82ad6d83e7d16e70$require$CHAR_BACKSLASH = $8198d1a489c5883e$exports.CHAR_BACKSLASH;
var $82ad6d83e7d16e70$require$CHAR_BACKTICK = $8198d1a489c5883e$exports.CHAR_BACKTICK;
var $82ad6d83e7d16e70$require$CHAR_COMMA = $8198d1a489c5883e$exports.CHAR_COMMA;
var $82ad6d83e7d16e70$require$CHAR_DOT = $8198d1a489c5883e$exports.CHAR_DOT;
var $82ad6d83e7d16e70$require$CHAR_LEFT_PARENTHESES = $8198d1a489c5883e$exports.CHAR_LEFT_PARENTHESES;
var $82ad6d83e7d16e70$require$CHAR_RIGHT_PARENTHESES = $8198d1a489c5883e$exports.CHAR_RIGHT_PARENTHESES;
var $82ad6d83e7d16e70$require$CHAR_LEFT_CURLY_BRACE = $8198d1a489c5883e$exports.CHAR_LEFT_CURLY_BRACE;
var $82ad6d83e7d16e70$require$CHAR_RIGHT_CURLY_BRACE = $8198d1a489c5883e$exports.CHAR_RIGHT_CURLY_BRACE;
var $82ad6d83e7d16e70$require$CHAR_LEFT_SQUARE_BRACKET = $8198d1a489c5883e$exports.CHAR_LEFT_SQUARE_BRACKET;
var $82ad6d83e7d16e70$require$CHAR_RIGHT_SQUARE_BRACKET = $8198d1a489c5883e$exports.CHAR_RIGHT_SQUARE_BRACKET;
var $82ad6d83e7d16e70$require$CHAR_DOUBLE_QUOTE = $8198d1a489c5883e$exports.CHAR_DOUBLE_QUOTE;
var $82ad6d83e7d16e70$require$CHAR_SINGLE_QUOTE = $8198d1a489c5883e$exports.CHAR_SINGLE_QUOTE;
var $82ad6d83e7d16e70$require$CHAR_NO_BREAK_SPACE = $8198d1a489c5883e$exports.CHAR_NO_BREAK_SPACE;
var $82ad6d83e7d16e70$require$CHAR_ZERO_WIDTH_NOBREAK_SPACE = $8198d1a489c5883e$exports.CHAR_ZERO_WIDTH_NOBREAK_SPACE;
/**
 * parse
 */ const $82ad6d83e7d16e70$var$parse = (input, options = {})=>{
    if (typeof input !== 'string') throw new TypeError('Expected a string');
    const opts = options || {};
    const max = typeof opts.maxLength === 'number' ? Math.min($82ad6d83e7d16e70$require$MAX_LENGTH, opts.maxLength) : $82ad6d83e7d16e70$require$MAX_LENGTH;
    if (input.length > max) throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
    const ast = {
        type: 'root',
        input: input,
        nodes: []
    };
    const stack = [
        ast
    ];
    let block = ast;
    let prev = ast;
    let brackets = 0;
    const length = input.length;
    let index = 0;
    let depth = 0;
    let value;
    /**
   * Helpers
   */ const advance = ()=>input[index++];
    const push = (node)=>{
        if (node.type === 'text' && prev.type === 'dot') prev.type = 'text';
        if (prev && prev.type === 'text' && node.type === 'text') {
            prev.value += node.value;
            return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
    };
    push({
        type: 'bos'
    });
    while(index < length){
        block = stack[stack.length - 1];
        value = advance();
        /**
     * Invalid chars
     */ if (value === $82ad6d83e7d16e70$require$CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === $82ad6d83e7d16e70$require$CHAR_NO_BREAK_SPACE) continue;
        /**
     * Escaped chars
     */ if (value === $82ad6d83e7d16e70$require$CHAR_BACKSLASH) {
            push({
                type: 'text',
                value: (options.keepEscaping ? value : '') + advance()
            });
            continue;
        }
        /**
     * Right square bracket (literal): ']'
     */ if (value === $82ad6d83e7d16e70$require$CHAR_RIGHT_SQUARE_BRACKET) {
            push({
                type: 'text',
                value: '\\' + value
            });
            continue;
        }
        /**
     * Left square bracket: '['
     */ if (value === $82ad6d83e7d16e70$require$CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let next;
            while(index < length && (next = advance())){
                value += next;
                if (next === $82ad6d83e7d16e70$require$CHAR_LEFT_SQUARE_BRACKET) {
                    brackets++;
                    continue;
                }
                if (next === $82ad6d83e7d16e70$require$CHAR_BACKSLASH) {
                    value += advance();
                    continue;
                }
                if (next === $82ad6d83e7d16e70$require$CHAR_RIGHT_SQUARE_BRACKET) {
                    brackets--;
                    if (brackets === 0) break;
                }
            }
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value === $82ad6d83e7d16e70$require$CHAR_LEFT_PARENTHESES) {
            block = push({
                type: 'paren',
                nodes: []
            });
            stack.push(block);
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        if (value === $82ad6d83e7d16e70$require$CHAR_RIGHT_PARENTHESES) {
            if (block.type !== 'paren') {
                push({
                    type: 'text',
                    value: value
                });
                continue;
            }
            block = stack.pop();
            push({
                type: 'text',
                value: value
            });
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Quotes: '|"|`
     */ if (value === $82ad6d83e7d16e70$require$CHAR_DOUBLE_QUOTE || value === $82ad6d83e7d16e70$require$CHAR_SINGLE_QUOTE || value === $82ad6d83e7d16e70$require$CHAR_BACKTICK) {
            const open = value;
            let next;
            if (options.keepQuotes !== true) value = '';
            while(index < length && (next = advance())){
                if (next === $82ad6d83e7d16e70$require$CHAR_BACKSLASH) {
                    value += next + advance();
                    continue;
                }
                if (next === open) {
                    if (options.keepQuotes === true) value += next;
                    break;
                }
                value += next;
            }
            push({
                type: 'text',
                value: value
            });
            continue;
        }
        /**
     * Left curly brace: '{'
     */ if (value === $82ad6d83e7d16e70$require$CHAR_LEFT_CURLY_BRACE) {
            depth++;
            const dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
            const brace = {
                type: 'brace',
                open: true,
                close: false,
                dollar: dollar,
                depth: depth,
                commas: 0,
                ranges: 0,
                nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({
                type: 'open',
                value: value
            });
            continue;
        }
        /**
     * Right curly brace: '}'
     */ if (value === $82ad6d83e7d16e70$require$CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== 'brace') {
                push({
                    type: 'text',
                    value: value
                });
                continue;
            }
            const type = 'close';
            block = stack.pop();
            block.close = true;
            push({
                type: type,
                value: value
            });
            depth--;
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Comma: ','
     */ if (value === $82ad6d83e7d16e70$require$CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
                block.ranges = 0;
                const open = block.nodes.shift();
                block.nodes = [
                    open,
                    {
                        type: 'text',
                        value: $67a1d0fc45881091$exports(block)
                    }
                ];
            }
            push({
                type: 'comma',
                value: value
            });
            block.commas++;
            continue;
        }
        /**
     * Dot: '.'
     */ if (value === $82ad6d83e7d16e70$require$CHAR_DOT && depth > 0 && block.commas === 0) {
            const siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
                push({
                    type: 'text',
                    value: value
                });
                continue;
            }
            if (prev.type === 'dot') {
                block.range = [];
                prev.value += value;
                prev.type = 'range';
                if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                    block.invalid = true;
                    block.ranges = 0;
                    prev.type = 'text';
                    continue;
                }
                block.ranges++;
                block.args = [];
                continue;
            }
            if (prev.type === 'range') {
                siblings.pop();
                const before = siblings[siblings.length - 1];
                before.value += prev.value + value;
                prev = before;
                block.ranges--;
                continue;
            }
            push({
                type: 'dot',
                value: value
            });
            continue;
        }
        /**
     * Text
     */ push({
            type: 'text',
            value: value
        });
    }
    // Mark imbalanced braces and brackets as invalid
    do {
        block = stack.pop();
        if (block.type !== 'root') {
            block.nodes.forEach((node)=>{
                if (!node.nodes) {
                    if (node.type === 'open') node.isOpen = true;
                    if (node.type === 'close') node.isClose = true;
                    if (!node.nodes) node.type = 'text';
                    node.invalid = true;
                }
            });
            // get the location of the block on parent.nodes (block's siblings)
            const parent = stack[stack.length - 1];
            const index = parent.nodes.indexOf(block);
            // replace the (invalid) block with it's nodes
            parent.nodes.splice(index, 1, ...block.nodes);
        }
    }while (stack.length > 0);
    push({
        type: 'eos'
    });
    return ast;
};
$82ad6d83e7d16e70$exports = $82ad6d83e7d16e70$var$parse;


/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */ const $c84f2449aa2b11a5$var$braces = (input, options = {})=>{
    let output = [];
    if (Array.isArray(input)) for (const pattern of input){
        const result = $c84f2449aa2b11a5$var$braces.create(pattern, options);
        if (Array.isArray(result)) output.push(...result);
        else output.push(result);
    }
    else output = [].concat($c84f2449aa2b11a5$var$braces.create(input, options));
    if (options && options.expand === true && options.nodupes === true) output = [
        ...new Set(output)
    ];
    return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */ $c84f2449aa2b11a5$var$braces.parse = (input, options = {})=>$82ad6d83e7d16e70$exports(input, options);
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ $c84f2449aa2b11a5$var$braces.stringify = (input, options = {})=>{
    if (typeof input === 'string') return $67a1d0fc45881091$exports($c84f2449aa2b11a5$var$braces.parse(input, options), options);
    return $67a1d0fc45881091$exports(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ $c84f2449aa2b11a5$var$braces.compile = (input, options = {})=>{
    if (typeof input === 'string') input = $c84f2449aa2b11a5$var$braces.parse(input, options);
    return $28eda6522df6e82d$exports(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ $c84f2449aa2b11a5$var$braces.expand = (input, options = {})=>{
    if (typeof input === 'string') input = $c84f2449aa2b11a5$var$braces.parse(input, options);
    let result = $094ee55f11d258da$exports(input, options);
    // filter out empty strings if specified
    if (options.noempty === true) result = result.filter(Boolean);
    // filter out duplicates if specified
    if (options.nodupes === true) result = [
        ...new Set(result)
    ];
    return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ $c84f2449aa2b11a5$var$braces.create = (input, options = {})=>{
    if (input === '' || input.length < 3) return [
        input
    ];
    return options.expand !== true ? $c84f2449aa2b11a5$var$braces.compile(input, options) : $c84f2449aa2b11a5$var$braces.expand(input, options);
};
/**
 * Expose "braces"
 */ $c84f2449aa2b11a5$exports = $c84f2449aa2b11a5$var$braces;



var $8c382650397dddff$exports = {};
'use strict';



var $8c382650397dddff$require$promisify = $jobL2$util.promisify;
var $9d3becd0b552864a$exports = {};
'use strict';

var $dce74a382145ee8c$exports = {};

$dce74a382145ee8c$exports = (parcelRequire("cA3NZ"));


const $9d3becd0b552864a$var$extensions = new Set($dce74a382145ee8c$exports);
$9d3becd0b552864a$exports = (filePath)=>$9d3becd0b552864a$var$extensions.has($jobL2$path.extname(filePath).slice(1).toLowerCase());


var $a5e788ff2081a817$export$6491a90e82d3f6e2;
var $a5e788ff2081a817$export$c20c948702454b1;
var $a5e788ff2081a817$export$d4cf4f0ec78d3f17;
var $a5e788ff2081a817$export$6e3f652cbb5d98e2;
var $a5e788ff2081a817$export$31800c7594dcd37a;
var $a5e788ff2081a817$export$22dd8604f73cbb12;
var $a5e788ff2081a817$export$9f82b41f28be31bb;
var $a5e788ff2081a817$export$12331996dce12ba4;
var $a5e788ff2081a817$export$6ecfa1375af86312;
var $a5e788ff2081a817$export$a394330384aa256c;
var $a5e788ff2081a817$export$89b8a9d6a3fcbda4;
var $a5e788ff2081a817$export$fa894ca5e7ebfb7f;
var $a5e788ff2081a817$export$d3616578c85a0ce6;
var $a5e788ff2081a817$export$e2c555f8bd399bc0;
var $a5e788ff2081a817$export$a0b169ab89fb4dd5;
var $a5e788ff2081a817$export$57e12204d17739a6;
var $a5e788ff2081a817$export$5b2fb8531de5302e;
var $a5e788ff2081a817$export$5e66a1c305e8c898;
var $a5e788ff2081a817$export$a98e8a5440bcaa5f;
var $a5e788ff2081a817$export$561ec8349f2cc2df;
var $a5e788ff2081a817$export$4db44f0d1d1cfa26;
var $a5e788ff2081a817$export$fefac369170ac325;
var $a5e788ff2081a817$export$873fba16aad13afe;
var $a5e788ff2081a817$export$4889786fd095a6bd;
var $a5e788ff2081a817$export$2b445e5c2be2faf0;
var $a5e788ff2081a817$export$f7eeff508862a005;
var $a5e788ff2081a817$export$608d5545eedd1728;
var $a5e788ff2081a817$export$c33b7f744dba3152;
var $a5e788ff2081a817$export$be0c82dadca9dc5e;
var $a5e788ff2081a817$export$958236a95b4186ff;
var $a5e788ff2081a817$export$98238152dfccf046;
var $a5e788ff2081a817$export$4f673f14d1ecee2f;
var $a5e788ff2081a817$export$24168a3ade45a8d6;
var $a5e788ff2081a817$export$99063ccd25c1359b;
var $a5e788ff2081a817$export$c7fdb0d725f43a48;
var $a5e788ff2081a817$export$54408be40394d82a;
var $a5e788ff2081a817$export$6c01ffe652e570ac;
var $a5e788ff2081a817$export$7aea8b2438ebc8a7;
var $a5e788ff2081a817$export$89716fde9dc0b6f1;
var $a5e788ff2081a817$export$b11c62ecc8345d0e;
var $a5e788ff2081a817$export$9a6845f2b109ea23;
var $a5e788ff2081a817$export$c65418d6b95dbf88;
var $a5e788ff2081a817$export$31a3bc04c4494acf;
var $a5e788ff2081a817$export$8814a5b46a5894e7;
var $a5e788ff2081a817$export$ca975a673560c9f5;
var $a5e788ff2081a817$export$90ac18bb05d4efdc;
var $a5e788ff2081a817$export$f993c945890e93ba;
var $a5e788ff2081a817$export$527179d397a2edf8;
'use strict';

var $a5e788ff2081a817$require$sep = $jobL2$path.sep;
const { platform: $a5e788ff2081a817$var$platform } = process;
$a5e788ff2081a817$export$6491a90e82d3f6e2 = 'all';
$a5e788ff2081a817$export$c20c948702454b1 = 'ready';
$a5e788ff2081a817$export$d4cf4f0ec78d3f17 = 'add';
$a5e788ff2081a817$export$6e3f652cbb5d98e2 = 'change';
$a5e788ff2081a817$export$31800c7594dcd37a = 'addDir';
$a5e788ff2081a817$export$22dd8604f73cbb12 = 'unlink';
$a5e788ff2081a817$export$9f82b41f28be31bb = 'unlinkDir';
$a5e788ff2081a817$export$12331996dce12ba4 = 'raw';
$a5e788ff2081a817$export$6ecfa1375af86312 = 'error';
$a5e788ff2081a817$export$a394330384aa256c = 'data';
$a5e788ff2081a817$export$89b8a9d6a3fcbda4 = 'end';
$a5e788ff2081a817$export$fa894ca5e7ebfb7f = 'close';
$a5e788ff2081a817$export$d3616578c85a0ce6 = 'created';
$a5e788ff2081a817$export$e2c555f8bd399bc0 = 'modified';
$a5e788ff2081a817$export$a0b169ab89fb4dd5 = 'deleted';
$a5e788ff2081a817$export$57e12204d17739a6 = 'moved';
$a5e788ff2081a817$export$5b2fb8531de5302e = 'cloned';
$a5e788ff2081a817$export$5e66a1c305e8c898 = 'unknown';
$a5e788ff2081a817$export$a98e8a5440bcaa5f = 'directory';
$a5e788ff2081a817$export$561ec8349f2cc2df = 'symlink';
$a5e788ff2081a817$export$4db44f0d1d1cfa26 = 'listeners';
$a5e788ff2081a817$export$fefac369170ac325 = 'errHandlers';
$a5e788ff2081a817$export$873fba16aad13afe = 'rawEmitters';
$a5e788ff2081a817$export$4889786fd095a6bd = [
    $a5e788ff2081a817$export$4db44f0d1d1cfa26,
    $a5e788ff2081a817$export$fefac369170ac325,
    $a5e788ff2081a817$export$873fba16aad13afe
];
$a5e788ff2081a817$export$2b445e5c2be2faf0 = `.${$a5e788ff2081a817$require$sep}`;
$a5e788ff2081a817$export$f7eeff508862a005 = /\\/g;
$a5e788ff2081a817$export$608d5545eedd1728 = /\/\//;
$a5e788ff2081a817$export$c33b7f744dba3152 = /[/\\]/;
$a5e788ff2081a817$export$be0c82dadca9dc5e = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
$a5e788ff2081a817$export$958236a95b4186ff = /^\.[/\\]/;
$a5e788ff2081a817$export$98238152dfccf046 = '/';
$a5e788ff2081a817$export$4f673f14d1ecee2f = '{';
$a5e788ff2081a817$export$24168a3ade45a8d6 = '!';
$a5e788ff2081a817$export$99063ccd25c1359b = '.';
$a5e788ff2081a817$export$c7fdb0d725f43a48 = '..';
$a5e788ff2081a817$export$54408be40394d82a = '*';
$a5e788ff2081a817$export$6c01ffe652e570ac = '**';
$a5e788ff2081a817$export$7aea8b2438ebc8a7 = '/**/*';
$a5e788ff2081a817$export$89716fde9dc0b6f1 = '/**';
$a5e788ff2081a817$export$b11c62ecc8345d0e = 'Dir';
$a5e788ff2081a817$export$9a6845f2b109ea23 = {
    dot: true
};
$a5e788ff2081a817$export$c65418d6b95dbf88 = 'string';
$a5e788ff2081a817$export$31a3bc04c4494acf = 'function';
$a5e788ff2081a817$export$8814a5b46a5894e7 = '';
$a5e788ff2081a817$export$ca975a673560c9f5 = ()=>{};
$a5e788ff2081a817$export$90ac18bb05d4efdc = (val)=>val;
$a5e788ff2081a817$export$f993c945890e93ba = $a5e788ff2081a817$var$platform === 'win32';
$a5e788ff2081a817$export$527179d397a2edf8 = $a5e788ff2081a817$var$platform === 'darwin';


var $8c382650397dddff$require$isWindows = $a5e788ff2081a817$export$f993c945890e93ba;
var $8c382650397dddff$require$EMPTY_FN = $a5e788ff2081a817$export$ca975a673560c9f5;
var $8c382650397dddff$require$EMPTY_STR = $a5e788ff2081a817$export$8814a5b46a5894e7;
var $8c382650397dddff$require$KEY_LISTENERS = $a5e788ff2081a817$export$4db44f0d1d1cfa26;
var $8c382650397dddff$require$KEY_ERR = $a5e788ff2081a817$export$fefac369170ac325;
var $8c382650397dddff$require$KEY_RAW = $a5e788ff2081a817$export$873fba16aad13afe;
var $8c382650397dddff$require$HANDLER_KEYS = $a5e788ff2081a817$export$4889786fd095a6bd;
var $8c382650397dddff$require$EV_CHANGE = $a5e788ff2081a817$export$6e3f652cbb5d98e2;
var $8c382650397dddff$require$EV_ADD = $a5e788ff2081a817$export$d4cf4f0ec78d3f17;
var $8c382650397dddff$require$EV_ADD_DIR = $a5e788ff2081a817$export$31800c7594dcd37a;
var $8c382650397dddff$require$EV_ERROR = $a5e788ff2081a817$export$6ecfa1375af86312;
var $8c382650397dddff$require$STR_DATA = $a5e788ff2081a817$export$a394330384aa256c;
var $8c382650397dddff$require$STR_END = $a5e788ff2081a817$export$89b8a9d6a3fcbda4;
var $8c382650397dddff$require$BRACE_START = $a5e788ff2081a817$export$4f673f14d1ecee2f;
var $8c382650397dddff$require$STAR = $a5e788ff2081a817$export$54408be40394d82a;
const $8c382650397dddff$var$THROTTLE_MODE_WATCH = 'watch';
const $8c382650397dddff$var$open = $8c382650397dddff$require$promisify($jobL2$fs.open);
const $8c382650397dddff$var$stat = $8c382650397dddff$require$promisify($jobL2$fs.stat);
const $8c382650397dddff$var$lstat = $8c382650397dddff$require$promisify($jobL2$fs.lstat);
const $8c382650397dddff$var$close = $8c382650397dddff$require$promisify($jobL2$fs.close);
const $8c382650397dddff$var$fsrealpath = $8c382650397dddff$require$promisify($jobL2$fs.realpath);
const $8c382650397dddff$var$statMethods = {
    lstat: $8c382650397dddff$var$lstat,
    stat: $8c382650397dddff$var$stat
};
// TODO: emit errors properly. Example: EMFILE on Macos.
const $8c382650397dddff$var$foreach = (val, fn)=>{
    if (val instanceof Set) val.forEach(fn);
    else fn(val);
};
const $8c382650397dddff$var$addAndConvert = (main, prop, item)=>{
    let container = main[prop];
    if (!(container instanceof Set)) main[prop] = container = new Set([
        container
    ]);
    container.add(item);
};
const $8c382650397dddff$var$clearItem = (cont)=>(key)=>{
        const set = cont[key];
        if (set instanceof Set) set.clear();
        else delete cont[key];
    };
const $8c382650397dddff$var$delFromSet = (main, prop, item)=>{
    const container = main[prop];
    if (container instanceof Set) container.delete(item);
    else if (container === item) delete main[prop];
};
const $8c382650397dddff$var$isEmptySet = (val)=>val instanceof Set ? val.size === 0 : !val;
/**
 * @typedef {String} Path
 */ // fs_watch helpers
// object to hold per-process fs_watch instances
// (may be shared across chokidar FSWatcher instances)
/**
 * @typedef {Object} FsWatchContainer
 * @property {Set} listeners
 * @property {Set} errHandlers
 * @property {Set} rawEmitters
 * @property {fs.FSWatcher=} watcher
 * @property {Boolean=} watcherUnusable
 */ /**
 * @type {Map<String,FsWatchContainer>}
 */ const $8c382650397dddff$var$FsWatchInstances = new Map();
/**
 * Instantiates the fs_watch interface
 * @param {String} path to be watched
 * @param {Object} options to be passed to fs_watch
 * @param {Function} listener main event handler
 * @param {Function} errHandler emits info about errors
 * @param {Function} emitRaw emits raw event data
 * @returns {fs.FSWatcher} new fsevents instance
 */ function $8c382650397dddff$var$createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
    const handleEvent = (rawEvent, evPath)=>{
        listener(path);
        emitRaw(rawEvent, evPath, {
            watchedPath: path
        });
        // emit based on events occurring for files from a directory's watcher in
        // case the file's watcher misses it (and rely on throttling to de-dupe)
        if (evPath && path !== evPath) $8c382650397dddff$var$fsWatchBroadcast($jobL2$path.resolve(path, evPath), $8c382650397dddff$require$KEY_LISTENERS, $jobL2$path.join(path, evPath));
    };
    try {
        return $jobL2$fs.watch(path, options, handleEvent);
    } catch (error) {
        errHandler(error);
    }
}
/**
 * Helper for passing fs_watch event data to a collection of listeners
 * @param {Path} fullPath absolute path bound to fs_watch instance
 * @param {String} type listener type
 * @param {*=} val1 arguments to be passed to listeners
 * @param {*=} val2
 * @param {*=} val3
 */ const $8c382650397dddff$var$fsWatchBroadcast = (fullPath, type, val1, val2, val3)=>{
    const cont = $8c382650397dddff$var$FsWatchInstances.get(fullPath);
    if (!cont) return;
    $8c382650397dddff$var$foreach(cont[type], (listener)=>{
        listener(val1, val2, val3);
    });
};
/**
 * Instantiates the fs_watch interface or binds listeners
 * to an existing one covering the same file system entry
 * @param {String} path
 * @param {String} fullPath absolute path
 * @param {Object} options to be passed to fs_watch
 * @param {Object} handlers container for event listener functions
 */ const $8c382650397dddff$var$setFsWatchListener = (path, fullPath, options, handlers)=>{
    const { listener: listener, errHandler: errHandler, rawEmitter: rawEmitter } = handlers;
    let cont = $8c382650397dddff$var$FsWatchInstances.get(fullPath);
    /** @type {fs.FSWatcher=} */ let watcher;
    if (!options.persistent) {
        watcher = $8c382650397dddff$var$createFsWatchInstance(path, options, listener, errHandler, rawEmitter);
        return watcher.close.bind(watcher);
    }
    if (cont) {
        $8c382650397dddff$var$addAndConvert(cont, $8c382650397dddff$require$KEY_LISTENERS, listener);
        $8c382650397dddff$var$addAndConvert(cont, $8c382650397dddff$require$KEY_ERR, errHandler);
        $8c382650397dddff$var$addAndConvert(cont, $8c382650397dddff$require$KEY_RAW, rawEmitter);
    } else {
        watcher = $8c382650397dddff$var$createFsWatchInstance(path, options, $8c382650397dddff$var$fsWatchBroadcast.bind(null, fullPath, $8c382650397dddff$require$KEY_LISTENERS), errHandler, $8c382650397dddff$var$fsWatchBroadcast.bind(null, fullPath, $8c382650397dddff$require$KEY_RAW));
        if (!watcher) return;
        watcher.on($8c382650397dddff$require$EV_ERROR, async (error)=>{
            const broadcastErr = $8c382650397dddff$var$fsWatchBroadcast.bind(null, fullPath, $8c382650397dddff$require$KEY_ERR);
            cont.watcherUnusable = true; // documented since Node 10.4.1
            // Workaround for https://github.com/joyent/node/issues/4337
            if ($8c382650397dddff$require$isWindows && error.code === 'EPERM') try {
                const fd = await $8c382650397dddff$var$open(path, 'r');
                await $8c382650397dddff$var$close(fd);
                broadcastErr(error);
            } catch (err) {}
            else broadcastErr(error);
        });
        cont = {
            listeners: listener,
            errHandlers: errHandler,
            rawEmitters: rawEmitter,
            watcher: watcher
        };
        $8c382650397dddff$var$FsWatchInstances.set(fullPath, cont);
    }
    // const index = cont.listeners.indexOf(listener);
    // removes this instance's listeners and closes the underlying fs_watch
    // instance if there are no more listeners left
    return ()=>{
        $8c382650397dddff$var$delFromSet(cont, $8c382650397dddff$require$KEY_LISTENERS, listener);
        $8c382650397dddff$var$delFromSet(cont, $8c382650397dddff$require$KEY_ERR, errHandler);
        $8c382650397dddff$var$delFromSet(cont, $8c382650397dddff$require$KEY_RAW, rawEmitter);
        if ($8c382650397dddff$var$isEmptySet(cont.listeners)) {
            // Check to protect against issue gh-730.
            // if (cont.watcherUnusable) {
            cont.watcher.close();
            // }
            $8c382650397dddff$var$FsWatchInstances.delete(fullPath);
            $8c382650397dddff$require$HANDLER_KEYS.forEach($8c382650397dddff$var$clearItem(cont));
            cont.watcher = undefined;
            Object.freeze(cont);
        }
    };
};
// fs_watchFile helpers
// object to hold per-process fs_watchFile instances
// (may be shared across chokidar FSWatcher instances)
const $8c382650397dddff$var$FsWatchFileInstances = new Map();
/**
 * Instantiates the fs_watchFile interface or binds listeners
 * to an existing one covering the same file system entry
 * @param {String} path to be watched
 * @param {String} fullPath absolute path
 * @param {Object} options options to be passed to fs_watchFile
 * @param {Object} handlers container for event listener functions
 * @returns {Function} closer
 */ const $8c382650397dddff$var$setFsWatchFileListener = (path, fullPath, options, handlers)=>{
    const { listener: listener, rawEmitter: rawEmitter } = handlers;
    let cont = $8c382650397dddff$var$FsWatchFileInstances.get(fullPath);
    /* eslint-disable no-unused-vars, prefer-destructuring */ let listeners = new Set();
    let rawEmitters = new Set();
    const copts = cont && cont.options;
    if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        // "Upgrade" the watcher to persistence or a quicker interval.
        // This creates some unlikely edge case issues if the user mixes
        // settings in a very weird way, but solving for those cases
        // doesn't seem worthwhile for the added complexity.
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        $jobL2$fs.unwatchFile(fullPath);
        cont = undefined;
    }
    /* eslint-enable no-unused-vars, prefer-destructuring */ if (cont) {
        $8c382650397dddff$var$addAndConvert(cont, $8c382650397dddff$require$KEY_LISTENERS, listener);
        $8c382650397dddff$var$addAndConvert(cont, $8c382650397dddff$require$KEY_RAW, rawEmitter);
    } else {
        // TODO
        // listeners.add(listener);
        // rawEmitters.add(rawEmitter);
        cont = {
            listeners: listener,
            rawEmitters: rawEmitter,
            options: options,
            watcher: $jobL2$fs.watchFile(fullPath, options, (curr, prev)=>{
                $8c382650397dddff$var$foreach(cont.rawEmitters, (rawEmitter)=>{
                    rawEmitter($8c382650397dddff$require$EV_CHANGE, fullPath, {
                        curr: curr,
                        prev: prev
                    });
                });
                const currmtime = curr.mtimeMs;
                if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) $8c382650397dddff$var$foreach(cont.listeners, (listener)=>listener(path, curr));
            })
        };
        $8c382650397dddff$var$FsWatchFileInstances.set(fullPath, cont);
    }
    // const index = cont.listeners.indexOf(listener);
    // Removes this instance's listeners and closes the underlying fs_watchFile
    // instance if there are no more listeners left.
    return ()=>{
        $8c382650397dddff$var$delFromSet(cont, $8c382650397dddff$require$KEY_LISTENERS, listener);
        $8c382650397dddff$var$delFromSet(cont, $8c382650397dddff$require$KEY_RAW, rawEmitter);
        if ($8c382650397dddff$var$isEmptySet(cont.listeners)) {
            $8c382650397dddff$var$FsWatchFileInstances.delete(fullPath);
            $jobL2$fs.unwatchFile(fullPath);
            cont.options = cont.watcher = undefined;
            Object.freeze(cont);
        }
    };
};
/**
 * @mixin
 */ class $8c382650397dddff$var$NodeFsHandler {
    /**
 * @param {import("../index").FSWatcher} fsW
 */ constructor(fsW){
        this.fsw = fsW;
        this._boundHandleError = (error)=>fsW._handleError(error);
    }
    /**
 * Watch file for changes with fs_watchFile or fs_watch.
 * @param {String} path to file or dir
 * @param {Function} listener on fs change
 * @returns {Function} closer for the watcher instance
 */ _watchWithNodeFs(path, listener) {
        const opts = this.fsw.options;
        const directory = $jobL2$path.dirname(path);
        const basename = $jobL2$path.basename(path);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = $jobL2$path.resolve(path);
        const options = {
            persistent: opts.persistent
        };
        if (!listener) listener = $8c382650397dddff$require$EMPTY_FN;
        let closer;
        if (opts.usePolling) {
            options.interval = opts.enableBinaryInterval && $9d3becd0b552864a$exports(basename) ? opts.binaryInterval : opts.interval;
            closer = $8c382650397dddff$var$setFsWatchFileListener(path, absolutePath, options, {
                listener: listener,
                rawEmitter: this.fsw._emitRaw
            });
        } else closer = $8c382650397dddff$var$setFsWatchListener(path, absolutePath, options, {
            listener: listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
        });
        return closer;
    }
    /**
 * Watch a file and emit add event if warranted.
 * @param {Path} file Path
 * @param {fs.Stats} stats result of fs_stat
 * @param {Boolean} initialAdd was the file added at watch instantiation?
 * @returns {Function} closer for the watcher instance
 */ _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) return;
        const dirname = $jobL2$path.dirname(file);
        const basename = $jobL2$path.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        // stats is always present
        let prevStats = stats;
        // if the file is already being watched, do nothing
        if (parent.has(basename)) return;
        // kick off the watcher
        const closer = this._watchWithNodeFs(file, async (path, newStats)=>{
            if (!this.fsw._throttle($8c382650397dddff$var$THROTTLE_MODE_WATCH, file, 5)) return;
            if (!newStats || newStats.mtimeMs === 0) try {
                const newStats = await $8c382650397dddff$var$stat(file);
                if (this.fsw.closed) return;
                // Check that change event was not fired because of changed only accessTime.
                const at = newStats.atimeMs;
                const mt = newStats.mtimeMs;
                if (!at || at <= mt || mt !== prevStats.mtimeMs) this.fsw._emit($8c382650397dddff$require$EV_CHANGE, file, newStats);
                prevStats = newStats;
            } catch (error) {
                // Fix issues where mtime is null but file is still present
                this.fsw._remove(dirname, basename);
            }
            else if (parent.has(basename)) {
                // Check that change event was not fired because of changed only accessTime.
                const at = newStats.atimeMs;
                const mt = newStats.mtimeMs;
                if (!at || at <= mt || mt !== prevStats.mtimeMs) this.fsw._emit($8c382650397dddff$require$EV_CHANGE, file, newStats);
                prevStats = newStats;
            }
        });
        // emit an add event if we're supposed to
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
            if (!this.fsw._throttle($8c382650397dddff$require$EV_ADD, file, 0)) return;
            this.fsw._emit($8c382650397dddff$require$EV_ADD, file, stats);
        }
        return closer;
    }
    /**
 * Handle symlinks encountered while reading a dir.
 * @param {Object} entry returned by readdirp
 * @param {String} directory path of dir being read
 * @param {String} path of this item
 * @param {String} item basename of this item
 * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
 */ async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) return;
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
            // watch symlink directly (don't follow) and detect changes
            this.fsw._incrReadyCount();
            const linkPath = await $8c382650397dddff$var$fsrealpath(path);
            if (this.fsw.closed) return;
            if (dir.has(item)) {
                if (this.fsw._symlinkPaths.get(full) !== linkPath) {
                    this.fsw._symlinkPaths.set(full, linkPath);
                    this.fsw._emit($8c382650397dddff$require$EV_CHANGE, path, entry.stats);
                }
            } else {
                dir.add(item);
                this.fsw._symlinkPaths.set(full, linkPath);
                this.fsw._emit($8c382650397dddff$require$EV_ADD, path, entry.stats);
            }
            this.fsw._emitReady();
            return true;
        }
        // don't follow the same symlink more than once
        if (this.fsw._symlinkPaths.has(full)) return true;
        this.fsw._symlinkPaths.set(full, true);
    }
    _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        // Normalize the directory name on Windows
        directory = $jobL2$path.join(directory, $8c382650397dddff$require$EMPTY_STR);
        if (!wh.hasGlob) {
            throttler = this.fsw._throttle('readdir', directory, 1000);
            if (!throttler) return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = new Set();
        let stream = this.fsw._readdirp(directory, {
            fileFilter: (entry)=>wh.filterPath(entry),
            directoryFilter: (entry)=>wh.filterDir(entry),
            depth: 0
        }).on($8c382650397dddff$require$STR_DATA, async (entry)=>{
            if (this.fsw.closed) {
                stream = undefined;
                return;
            }
            const item = entry.path;
            let path = $jobL2$path.join(directory, item);
            current.add(item);
            if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) return;
            if (this.fsw.closed) {
                stream = undefined;
                return;
            }
            // Files that present in current directory snapshot
            // but absent in previous are added to watch list and
            // emit `add` event.
            if (item === target || !target && !previous.has(item)) {
                this.fsw._incrReadyCount();
                // ensure relativeness of path is preserved in case of watcher reuse
                path = $jobL2$path.join(dir, $jobL2$path.relative(dir, path));
                this._addToNodeFs(path, initialAdd, wh, depth + 1);
            }
        }).on($8c382650397dddff$require$EV_ERROR, this._boundHandleError);
        return new Promise((resolve)=>stream.once($8c382650397dddff$require$STR_END, ()=>{
                if (this.fsw.closed) {
                    stream = undefined;
                    return;
                }
                const wasThrottled = throttler ? throttler.clear() : false;
                resolve();
                // Files that absent in current directory snapshot
                // but present in previous emit `remove` event
                // and are removed from @watched[directory].
                previous.getChildren().filter((item)=>{
                    return item !== directory && !current.has(item) && // in case of intersecting globs;
                    // a path may have been filtered out of this readdir, but
                    // shouldn't be removed because it matches a different glob
                    (!wh.hasGlob || wh.filterPath({
                        fullPath: $jobL2$path.resolve(directory, item)
                    }));
                }).forEach((item)=>{
                    this.fsw._remove(directory, item);
                });
                stream = undefined;
                // one more time for any missed in case changes came in extremely quickly
                if (wasThrottled) this._handleRead(directory, false, wh, target, dir, depth, throttler);
            }));
    }
    /**
 * Read directory to add / remove files from `@watched` list and re-read it on change.
 * @param {String} dir fs path
 * @param {fs.Stats} stats
 * @param {Boolean} initialAdd
 * @param {Number} depth relative to user-supplied path
 * @param {String} target child path targeted for watch
 * @param {Object} wh Common watch helpers for this path
 * @param {String} realpath
 * @returns {Promise<Function>} closer for the watcher instance.
 */ async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir($jobL2$path.dirname(dir));
        const tracked = parentDir.has($jobL2$path.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
            if (!wh.hasGlob || wh.globFilter(dir)) this.fsw._emit($8c382650397dddff$require$EV_ADD_DIR, dir, stats);
        }
        // ensure dir is tracked (harmless if redundant)
        parentDir.add($jobL2$path.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
            if (!target) {
                await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
                if (this.fsw.closed) return;
            }
            closer = this._watchWithNodeFs(dir, (dirPath, stats)=>{
                // if current directory is removed, do nothing
                if (stats && stats.mtimeMs === 0) return;
                this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
            });
        }
        return closer;
    }
    /**
 * Handle added file, directory, or glob pattern.
 * Delegates call to _handleFile / _handleDir after checks.
 * @param {String} path to file or ir
 * @param {Boolean} initialAdd was the file added at watch instantiation?
 * @param {Object} priorWh depth relative to user-supplied path
 * @param {Number} depth Child path actually targeted for watch
 * @param {String=} target Child path actually targeted for watch
 * @returns {Promise}
 */ async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) {
            ready();
            return false;
        }
        const wh = this.fsw._getWatchHelpers(path, depth);
        if (!wh.hasGlob && priorWh) {
            wh.hasGlob = priorWh.hasGlob;
            wh.globFilter = priorWh.globFilter;
            wh.filterPath = (entry)=>priorWh.filterPath(entry);
            wh.filterDir = (entry)=>priorWh.filterDir(entry);
        }
        // evaluate what is at the path we're being asked to watch
        try {
            const stats = await $8c382650397dddff$var$statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) {
                ready();
                return false;
            }
            const follow = this.fsw.options.followSymlinks && !path.includes($8c382650397dddff$require$STAR) && !path.includes($8c382650397dddff$require$BRACE_START);
            let closer;
            if (stats.isDirectory()) {
                const targetPath = follow ? await $8c382650397dddff$var$fsrealpath(path) : path;
                if (this.fsw.closed) return;
                closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
                if (this.fsw.closed) return;
                // preserve this symlink's target path
                if (path !== targetPath && targetPath !== undefined) this.fsw._symlinkPaths.set(targetPath, true);
            } else if (stats.isSymbolicLink()) {
                const targetPath = follow ? await $8c382650397dddff$var$fsrealpath(path) : path;
                if (this.fsw.closed) return;
                const parent = $jobL2$path.dirname(wh.watchPath);
                this.fsw._getWatchedDir(parent).add(wh.watchPath);
                this.fsw._emit($8c382650397dddff$require$EV_ADD, wh.watchPath, stats);
                closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
                if (this.fsw.closed) return;
                // preserve this symlink's target path
                if (targetPath !== undefined) this.fsw._symlinkPaths.set($jobL2$path.resolve(path), targetPath);
            } else closer = this._handleFile(wh.watchPath, stats, initialAdd);
            ready();
            this.fsw._addPathCloser(path, closer);
            return false;
        } catch (error) {
            if (this.fsw._handleError(error)) {
                ready();
                return path;
            }
        }
    }
}
$8c382650397dddff$exports = $8c382650397dddff$var$NodeFsHandler;


var $dd63bec0e4ae5025$exports = {};
'use strict';



var $dd63bec0e4ae5025$require$promisify = $jobL2$util.promisify;
let $dd63bec0e4ae5025$var$fsevents;

try {
    $dd63bec0e4ae5025$var$fsevents = $dd63bec0e4ae5025$import$85cef479d9e8a0fd;
} catch (error) {
    if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error);
}
if ($dd63bec0e4ae5025$var$fsevents) {
    // TODO: real check
    const mtch = process.version.match(/v(\d+)\.(\d+)/);
    if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) $dd63bec0e4ae5025$var$fsevents = undefined;
    }
}

var $dd63bec0e4ae5025$require$EV_ADD = $a5e788ff2081a817$export$d4cf4f0ec78d3f17;
var $dd63bec0e4ae5025$require$EV_CHANGE = $a5e788ff2081a817$export$6e3f652cbb5d98e2;
var $dd63bec0e4ae5025$require$EV_ADD_DIR = $a5e788ff2081a817$export$31800c7594dcd37a;
var $dd63bec0e4ae5025$require$EV_UNLINK = $a5e788ff2081a817$export$22dd8604f73cbb12;
var $dd63bec0e4ae5025$require$EV_ERROR = $a5e788ff2081a817$export$6ecfa1375af86312;
var $dd63bec0e4ae5025$require$STR_DATA = $a5e788ff2081a817$export$a394330384aa256c;
var $dd63bec0e4ae5025$require$STR_END = $a5e788ff2081a817$export$89b8a9d6a3fcbda4;
var $dd63bec0e4ae5025$require$FSEVENT_CREATED = $a5e788ff2081a817$export$d3616578c85a0ce6;
var $dd63bec0e4ae5025$require$FSEVENT_MODIFIED = $a5e788ff2081a817$export$e2c555f8bd399bc0;
var $dd63bec0e4ae5025$require$FSEVENT_DELETED = $a5e788ff2081a817$export$a0b169ab89fb4dd5;
var $dd63bec0e4ae5025$require$FSEVENT_MOVED = $a5e788ff2081a817$export$57e12204d17739a6;
var $dd63bec0e4ae5025$require$FSEVENT_UNKNOWN = $a5e788ff2081a817$export$5e66a1c305e8c898;
var $dd63bec0e4ae5025$require$FSEVENT_TYPE_DIRECTORY = $a5e788ff2081a817$export$a98e8a5440bcaa5f;
var $dd63bec0e4ae5025$require$FSEVENT_TYPE_SYMLINK = $a5e788ff2081a817$export$561ec8349f2cc2df;
var $dd63bec0e4ae5025$require$ROOT_GLOBSTAR = $a5e788ff2081a817$export$7aea8b2438ebc8a7;
var $dd63bec0e4ae5025$require$DIR_SUFFIX = $a5e788ff2081a817$export$b11c62ecc8345d0e;
var $dd63bec0e4ae5025$require$DOT_SLASH = $a5e788ff2081a817$export$2b445e5c2be2faf0;
var $dd63bec0e4ae5025$require$FUNCTION_TYPE = $a5e788ff2081a817$export$31a3bc04c4494acf;
var $dd63bec0e4ae5025$require$EMPTY_FN = $a5e788ff2081a817$export$ca975a673560c9f5;
var $dd63bec0e4ae5025$require$IDENTITY_FN = $a5e788ff2081a817$export$90ac18bb05d4efdc;
const $dd63bec0e4ae5025$var$FS_MODE_READ = 'r';
const $dd63bec0e4ae5025$var$Depth = (value)=>isNaN(value) ? {} : {
        depth: value
    };
const $dd63bec0e4ae5025$var$stat = $dd63bec0e4ae5025$require$promisify($jobL2$fs.stat);
const $dd63bec0e4ae5025$var$open = $dd63bec0e4ae5025$require$promisify($jobL2$fs.open);
const $dd63bec0e4ae5025$var$close = $dd63bec0e4ae5025$require$promisify($jobL2$fs.close);
const $dd63bec0e4ae5025$var$lstat = $dd63bec0e4ae5025$require$promisify($jobL2$fs.lstat);
const $dd63bec0e4ae5025$var$realpath = $dd63bec0e4ae5025$require$promisify($jobL2$fs.realpath);
const $dd63bec0e4ae5025$var$statMethods = {
    stat: $dd63bec0e4ae5025$var$stat,
    lstat: $dd63bec0e4ae5025$var$lstat
};
/**
 * @typedef {String} Path
 */ /**
 * @typedef {Object} FsEventsWatchContainer
 * @property {Set<Function>} listeners
 * @property {Function} rawEmitter
 * @property {{stop: Function}} watcher
 */ // fsevents instance helper functions
/**
 * Object to hold per-process fsevents instances (may be shared across chokidar FSWatcher instances)
 * @type {Map<Path,FsEventsWatchContainer>}
 */ const $dd63bec0e4ae5025$var$FSEventsWatchers = new Map();
// Threshold of duplicate path prefixes at which to start
// consolidating going forward
const $dd63bec0e4ae5025$var$consolidateThreshhold = 10;
const $dd63bec0e4ae5025$var$wrongEventFlags = new Set([
    69888,
    70400,
    71424,
    72704,
    73472,
    131328,
    131840,
    262912
]);
/**
 * Instantiates the fsevents interface
 * @param {Path} path path to be watched
 * @param {Function} callback called when fsevents is bound and ready
 * @returns {{stop: Function}} new fsevents instance
 */ const $dd63bec0e4ae5025$var$createFSEventsInstance = (path, callback)=>{
    const stop = $dd63bec0e4ae5025$var$fsevents.watch(path, callback);
    return {
        stop: stop
    };
};
/**
 * Instantiates the fsevents interface or binds listeners to an existing one covering
 * the same file tree.
 * @param {Path} path           - to be watched
 * @param {Path} realPath       - real path for symlinks
 * @param {Function} listener   - called when fsevents emits events
 * @param {Function} rawEmitter - passes data to listeners of the 'raw' event
 * @returns {Function} closer
 */ function $dd63bec0e4ae5025$var$setFSEventsListener(path, realPath, listener, rawEmitter, fsw) {
    let watchPath = $jobL2$path.extname(path) ? $jobL2$path.dirname(path) : path;
    const parentPath = $jobL2$path.dirname(watchPath);
    let cont = $dd63bec0e4ae5025$var$FSEventsWatchers.get(watchPath);
    // If we've accumulated a substantial number of paths that
    // could have been consolidated by watching one directory
    // above the current one, create a watcher on the parent
    // path instead, so that we do consolidate going forward.
    if ($dd63bec0e4ae5025$var$couldConsolidate(parentPath)) watchPath = parentPath;
    const resolvedPath = $jobL2$path.resolve(path);
    const hasSymlink = resolvedPath !== realPath;
    const filteredListener = (fullPath, flags, info)=>{
        if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + $jobL2$path.sep)) listener(fullPath, flags, info);
    };
    // check if there is already a watcher on a parent path
    // modifies `watchPath` to the parent path when it finds a match
    let watchedParent = false;
    for (const watchedPath of $dd63bec0e4ae5025$var$FSEventsWatchers.keys())if (realPath.indexOf($jobL2$path.resolve(watchedPath) + $jobL2$path.sep) === 0) {
        watchPath = watchedPath;
        cont = $dd63bec0e4ae5025$var$FSEventsWatchers.get(watchPath);
        watchedParent = true;
        break;
    }
    if (cont || watchedParent) cont.listeners.add(filteredListener);
    else {
        cont = {
            listeners: new Set([
                filteredListener
            ]),
            rawEmitter: rawEmitter,
            watcher: $dd63bec0e4ae5025$var$createFSEventsInstance(watchPath, (fullPath, flags)=>{
                if (fsw.closed) return;
                const info = $dd63bec0e4ae5025$var$fsevents.getInfo(fullPath, flags);
                cont.listeners.forEach((list)=>{
                    list(fullPath, flags, info);
                });
                cont.rawEmitter(info.event, fullPath, info);
            })
        };
        $dd63bec0e4ae5025$var$FSEventsWatchers.set(watchPath, cont);
    }
    // removes this instance's listeners and closes the underlying fsevents
    // instance if there are no more listeners left
    return ()=>{
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
            $dd63bec0e4ae5025$var$FSEventsWatchers.delete(watchPath);
            if (cont.watcher) return cont.watcher.stop().then(()=>{
                cont.rawEmitter = cont.watcher = undefined;
                Object.freeze(cont);
            });
        }
    };
}
// Decide whether or not we should start a new higher-level
// parent watcher
const $dd63bec0e4ae5025$var$couldConsolidate = (path)=>{
    let count = 0;
    for (const watchPath of $dd63bec0e4ae5025$var$FSEventsWatchers.keys())if (watchPath.indexOf(path) === 0) {
        count++;
        if (count >= $dd63bec0e4ae5025$var$consolidateThreshhold) return true;
    }
    return false;
};
// returns boolean indicating whether fsevents can be used
const $dd63bec0e4ae5025$var$canUse = ()=>$dd63bec0e4ae5025$var$fsevents && $dd63bec0e4ae5025$var$FSEventsWatchers.size < 128;
// determines subdirectory traversal levels from root to path
const $dd63bec0e4ae5025$var$calcDepth = (path, root)=>{
    let i = 0;
    while(!path.indexOf(root) && (path = $jobL2$path.dirname(path)) !== root)i++;
    return i;
};
/**
 * @mixin
 */ class $dd63bec0e4ae5025$var$FsEventsHandler {
    /**
 * @param {import('../index').FSWatcher} fsw
 */ constructor(fsw){
        this.fsw = fsw;
    }
    checkIgnored(path, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path, stats)) {
            ipaths.add(path);
            if (stats && stats.isDirectory()) ipaths.add(path + $dd63bec0e4ae5025$require$ROOT_GLOBSTAR);
            return true;
        }
        ipaths.delete(path);
        ipaths.delete(path + $dd63bec0e4ae5025$require$ROOT_GLOBSTAR);
    }
    addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? $dd63bec0e4ae5025$require$EV_CHANGE : $dd63bec0e4ae5025$require$EV_ADD;
        this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts);
    }
    async checkFd(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        try {
            const fd = await $dd63bec0e4ae5025$var$open(path, $dd63bec0e4ae5025$var$FS_MODE_READ);
            if (this.fsw.closed) return;
            await $dd63bec0e4ae5025$var$close(fd);
            if (this.fsw.closed) return;
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
        } catch (error) {
            if (error.code === 'EACCES') this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            else this.handleEvent($dd63bec0e4ae5025$require$EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
        }
    }
    handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path)) return;
        if (event === $dd63bec0e4ae5025$require$EV_UNLINK) // suppress unlink events on never before seen files
        {
            if (info.type === $dd63bec0e4ae5025$require$FSEVENT_TYPE_DIRECTORY || watchedDir.has(item)) this.fsw._remove(parent, item);
        } else {
            if (event === $dd63bec0e4ae5025$require$EV_ADD) {
                // track new directories
                if (info.type === $dd63bec0e4ae5025$require$FSEVENT_TYPE_DIRECTORY) this.fsw._getWatchedDir(path);
                if (info.type === $dd63bec0e4ae5025$require$FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
                    // push symlinks back to the top of the stack to get handled
                    const curDepth = opts.depth === undefined ? undefined : $dd63bec0e4ae5025$var$calcDepth(fullPath, realPath) + 1;
                    return this._addToFsEvents(path, false, true, curDepth);
                }
                // track new paths
                // (other than symlinks being followed, which will be tracked soon)
                this.fsw._getWatchedDir(parent).add(item);
            }
            /**
     * @type {'add'|'addDir'|'unlink'|'unlinkDir'}
     */ const eventName = info.type === $dd63bec0e4ae5025$require$FSEVENT_TYPE_DIRECTORY ? event + $dd63bec0e4ae5025$require$DIR_SUFFIX : event;
            this.fsw._emit(eventName, path);
            if (eventName === $dd63bec0e4ae5025$require$EV_ADD_DIR) this._addToFsEvents(path, false, true);
        }
    }
    /**
 * Handle symlinks encountered during directory scan
 * @param {String} watchPath  - file/dir path to be watched with fsevents
 * @param {String} realPath   - real path (in case of symlinks)
 * @param {Function} transform  - path transformer
 * @param {Function} globFilter - path filter in case a glob pattern was provided
 * @returns {Function} closer for the watcher instance
*/ _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed) return;
        if (this.fsw._isIgnored(watchPath)) return;
        const opts = this.fsw.options;
        const watchCallback = async (fullPath, flags, info)=>{
            if (this.fsw.closed) return;
            if (opts.depth !== undefined && $dd63bec0e4ae5025$var$calcDepth(fullPath, realPath) > opts.depth) return;
            const path = transform($jobL2$path.join(watchPath, $jobL2$path.relative(watchPath, fullPath)));
            if (globFilter && !globFilter(path)) return;
            // ensure directories are tracked
            const parent = $jobL2$path.dirname(path);
            const item = $jobL2$path.basename(path);
            const watchedDir = this.fsw._getWatchedDir(info.type === $dd63bec0e4ae5025$require$FSEVENT_TYPE_DIRECTORY ? path : parent);
            // correct for wrong events emitted
            if ($dd63bec0e4ae5025$var$wrongEventFlags.has(flags) || info.event === $dd63bec0e4ae5025$require$FSEVENT_UNKNOWN) {
                if (typeof opts.ignored === $dd63bec0e4ae5025$require$FUNCTION_TYPE) {
                    let stats;
                    try {
                        stats = await $dd63bec0e4ae5025$var$stat(path);
                    } catch (error) {}
                    if (this.fsw.closed) return;
                    if (this.checkIgnored(path, stats)) return;
                    if (stats) this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
                    else this.handleEvent($dd63bec0e4ae5025$require$EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
                } else this.checkFd(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            } else switch(info.event){
                case $dd63bec0e4ae5025$require$FSEVENT_CREATED:
                case $dd63bec0e4ae5025$require$FSEVENT_MODIFIED:
                    return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
                case $dd63bec0e4ae5025$require$FSEVENT_DELETED:
                case $dd63bec0e4ae5025$require$FSEVENT_MOVED:
                    return this.checkFd(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
        };
        const closer = $dd63bec0e4ae5025$var$setFSEventsListener(watchPath, realPath, watchCallback, this.fsw._emitRaw, this.fsw);
        this.fsw._emitReady();
        return closer;
    }
    /**
 * Handle symlinks encountered during directory scan
 * @param {String} linkPath path to symlink
 * @param {String} fullPath absolute path to the symlink
 * @param {Function} transform pre-existing path transformer
 * @param {Number} curDepth level of subdirectories traversed to where symlink is
 * @returns {Promise<void>}
 */ async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        // don't follow the same symlink more than once
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath)) return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
            const linkTarget = await $dd63bec0e4ae5025$var$realpath(linkPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(linkTarget)) return this.fsw._emitReady();
            this.fsw._incrReadyCount();
            // add the linkTarget for watching with a wrapper for transform
            // that causes emitted paths to incorporate the link's path
            this._addToFsEvents(linkTarget || linkPath, (path)=>{
                let aliasedPath = linkPath;
                if (linkTarget && linkTarget !== $dd63bec0e4ae5025$require$DOT_SLASH) aliasedPath = path.replace(linkTarget, linkPath);
                else if (path !== $dd63bec0e4ae5025$require$DOT_SLASH) aliasedPath = $jobL2$path.join(linkPath, path);
                return transform(aliasedPath);
            }, false, curDepth);
        } catch (error) {
            if (this.fsw._handleError(error)) return this.fsw._emitReady();
        }
    }
    /**
 *
 * @param {Path} newPath
 * @param {fs.Stats} stats
 */ emitAdd(newPath, stats, processPath, opts, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir($jobL2$path.dirname(pp));
        const base = $jobL2$path.basename(pp);
        // ensure empty dirs get tracked
        if (isDir) this.fsw._getWatchedDir(pp);
        if (dirObj.has(base)) return;
        dirObj.add(base);
        if (!opts.ignoreInitial || forceAdd === true) this.fsw._emit(isDir ? $dd63bec0e4ae5025$require$EV_ADD_DIR : $dd63bec0e4ae5025$require$EV_ADD, pp, stats);
    }
    initWatch(realPath, path, wh, processPath) {
        if (this.fsw.closed) return;
        const closer = this._watchWithFsEvents(wh.watchPath, $jobL2$path.resolve(realPath || wh.watchPath), processPath, wh.globFilter);
        this.fsw._addPathCloser(path, closer);
    }
    /**
 * Handle added path with fsevents
 * @param {String} path file/dir path or glob pattern
 * @param {Function|Boolean=} transform converts working path to what the user expects
 * @param {Boolean=} forceAdd ensure add is emitted
 * @param {Number=} priorDepth Level of subdirectories already traversed.
 * @returns {Promise<void>}
 */ async _addToFsEvents(path, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) return;
        const opts = this.fsw.options;
        const processPath = typeof transform === $dd63bec0e4ae5025$require$FUNCTION_TYPE ? transform : $dd63bec0e4ae5025$require$IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path);
        // evaluate what is at the path we're being asked to watch
        try {
            const stats = await $dd63bec0e4ae5025$var$statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) throw null;
            if (stats.isDirectory()) {
                // emit addDir unless this is a glob parent
                if (!wh.globFilter) this.emitAdd(processPath(path), stats, processPath, opts, forceAdd);
                // don't recurse further if it would exceed depth setting
                if (priorDepth && priorDepth > opts.depth) return;
                // scan the contents of the dir
                this.fsw._readdirp(wh.watchPath, {
                    fileFilter: (entry)=>wh.filterPath(entry),
                    directoryFilter: (entry)=>wh.filterDir(entry),
                    ...$dd63bec0e4ae5025$var$Depth(opts.depth - (priorDepth || 0))
                }).on($dd63bec0e4ae5025$require$STR_DATA, (entry)=>{
                    // need to check filterPath on dirs b/c filterDir is less restrictive
                    if (this.fsw.closed) return;
                    if (entry.stats.isDirectory() && !wh.filterPath(entry)) return;
                    const joinedPath = $jobL2$path.join(wh.watchPath, entry.path);
                    const { fullPath: fullPath } = entry;
                    if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                        // preserve the current depth here since it can't be derived from
                        // real paths past the symlink
                        const curDepth = opts.depth === undefined ? undefined : $dd63bec0e4ae5025$var$calcDepth(joinedPath, $jobL2$path.resolve(wh.watchPath)) + 1;
                        this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
                    } else this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
                }).on($dd63bec0e4ae5025$require$EV_ERROR, $dd63bec0e4ae5025$require$EMPTY_FN).on($dd63bec0e4ae5025$require$STR_END, ()=>{
                    this.fsw._emitReady();
                });
            } else {
                this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
                this.fsw._emitReady();
            }
        } catch (error) {
            if (!error || this.fsw._handleError(error)) {
                // TODO: Strange thing: "should not choke on an ignored watch path" will be failed without 2 ready calls -__-
                this.fsw._emitReady();
                this.fsw._emitReady();
            }
        }
        if (opts.persistent && forceAdd !== true) {
            if (typeof transform === $dd63bec0e4ae5025$require$FUNCTION_TYPE) // realpath has already been resolved
            this.initWatch(undefined, path, wh, processPath);
            else {
                let realPath;
                try {
                    realPath = await $dd63bec0e4ae5025$var$realpath(wh.watchPath);
                } catch (e) {}
                this.initWatch(realPath, path, wh, processPath);
            }
        }
    }
}
$dd63bec0e4ae5025$exports = $dd63bec0e4ae5025$var$FsEventsHandler;
$dd63bec0e4ae5025$exports.canUse = $dd63bec0e4ae5025$var$canUse;



var $771fcff429d55e18$require$EV_ALL = $a5e788ff2081a817$export$6491a90e82d3f6e2;
var $771fcff429d55e18$require$EV_READY = $a5e788ff2081a817$export$c20c948702454b1;
var $771fcff429d55e18$require$EV_ADD = $a5e788ff2081a817$export$d4cf4f0ec78d3f17;
var $771fcff429d55e18$require$EV_CHANGE = $a5e788ff2081a817$export$6e3f652cbb5d98e2;
var $771fcff429d55e18$require$EV_UNLINK = $a5e788ff2081a817$export$22dd8604f73cbb12;
var $771fcff429d55e18$require$EV_ADD_DIR = $a5e788ff2081a817$export$31800c7594dcd37a;
var $771fcff429d55e18$require$EV_UNLINK_DIR = $a5e788ff2081a817$export$9f82b41f28be31bb;
var $771fcff429d55e18$require$EV_RAW = $a5e788ff2081a817$export$12331996dce12ba4;
var $771fcff429d55e18$require$EV_ERROR = $a5e788ff2081a817$export$6ecfa1375af86312;
var $771fcff429d55e18$require$STR_CLOSE = $a5e788ff2081a817$export$fa894ca5e7ebfb7f;
var $771fcff429d55e18$require$STR_END = $a5e788ff2081a817$export$89b8a9d6a3fcbda4;
var $771fcff429d55e18$require$BACK_SLASH_RE = $a5e788ff2081a817$export$f7eeff508862a005;
var $771fcff429d55e18$require$DOUBLE_SLASH_RE = $a5e788ff2081a817$export$608d5545eedd1728;
var $771fcff429d55e18$require$SLASH_OR_BACK_SLASH_RE = $a5e788ff2081a817$export$c33b7f744dba3152;
var $771fcff429d55e18$require$DOT_RE = $a5e788ff2081a817$export$be0c82dadca9dc5e;
var $771fcff429d55e18$require$REPLACER_RE = $a5e788ff2081a817$export$958236a95b4186ff;
var $771fcff429d55e18$require$SLASH = $a5e788ff2081a817$export$98238152dfccf046;
var $771fcff429d55e18$require$BRACE_START = $a5e788ff2081a817$export$4f673f14d1ecee2f;
var $771fcff429d55e18$require$BANG = $a5e788ff2081a817$export$24168a3ade45a8d6;
var $771fcff429d55e18$require$ONE_DOT = $a5e788ff2081a817$export$99063ccd25c1359b;
var $771fcff429d55e18$require$TWO_DOTS = $a5e788ff2081a817$export$c7fdb0d725f43a48;
var $771fcff429d55e18$require$GLOBSTAR = $a5e788ff2081a817$export$6c01ffe652e570ac;
var $771fcff429d55e18$require$SLASH_GLOBSTAR = $a5e788ff2081a817$export$89716fde9dc0b6f1;
var $771fcff429d55e18$require$ANYMATCH_OPTS = $a5e788ff2081a817$export$9a6845f2b109ea23;
var $771fcff429d55e18$require$STRING_TYPE = $a5e788ff2081a817$export$c65418d6b95dbf88;
var $771fcff429d55e18$require$FUNCTION_TYPE = $a5e788ff2081a817$export$31a3bc04c4494acf;
var $771fcff429d55e18$require$EMPTY_STR = $a5e788ff2081a817$export$8814a5b46a5894e7;
var $771fcff429d55e18$require$EMPTY_FN = $a5e788ff2081a817$export$ca975a673560c9f5;
var $771fcff429d55e18$require$isWindows = $a5e788ff2081a817$export$f993c945890e93ba;
var $771fcff429d55e18$require$isMacos = $a5e788ff2081a817$export$527179d397a2edf8;
const $771fcff429d55e18$var$stat = $771fcff429d55e18$require$promisify($jobL2$fs.stat);
const $771fcff429d55e18$var$readdir = $771fcff429d55e18$require$promisify($jobL2$fs.readdir);
/**
 * @typedef {String} Path
 * @typedef {'all'|'add'|'addDir'|'change'|'unlink'|'unlinkDir'|'raw'|'error'|'ready'} EventName
 * @typedef {'readdir'|'watch'|'add'|'remove'|'change'} ThrottleType
 */ /**
 *
 * @typedef {Object} WatchHelpers
 * @property {Boolean} followSymlinks
 * @property {'stat'|'lstat'} statMethod
 * @property {Path} path
 * @property {Path} watchPath
 * @property {Function} entryPath
 * @property {Boolean} hasGlob
 * @property {Object} globFilter
 * @property {Function} filterPath
 * @property {Function} filterDir
 */ const $771fcff429d55e18$var$arrify = (value = [])=>Array.isArray(value) ? value : [
        value
    ];
const $771fcff429d55e18$var$flatten = (list, result = [])=>{
    list.forEach((item)=>{
        if (Array.isArray(item)) $771fcff429d55e18$var$flatten(item, result);
        else result.push(item);
    });
    return result;
};
const $771fcff429d55e18$var$unifyPaths = (paths_)=>{
    /**
   * @type {Array<String>}
   */ const paths = $771fcff429d55e18$var$flatten($771fcff429d55e18$var$arrify(paths_));
    if (!paths.every((p)=>typeof p === $771fcff429d55e18$require$STRING_TYPE)) throw new TypeError(`Non-string provided as watch path: ${paths}`);
    return paths.map($771fcff429d55e18$var$normalizePathToUnix);
};
const $771fcff429d55e18$var$toUnix = (string)=>{
    let str = string.replace($771fcff429d55e18$require$BACK_SLASH_RE, $771fcff429d55e18$require$SLASH);
    while(str.match($771fcff429d55e18$require$DOUBLE_SLASH_RE))str = str.replace($771fcff429d55e18$require$DOUBLE_SLASH_RE, $771fcff429d55e18$require$SLASH);
    return str;
};
// Our version of upath.normalize
// TODO: this is not equal to path-normalize module - investigate why
const $771fcff429d55e18$var$normalizePathToUnix = (path)=>$771fcff429d55e18$var$toUnix($jobL2$path.normalize($771fcff429d55e18$var$toUnix(path)));
const $771fcff429d55e18$var$normalizeIgnored = (cwd = $771fcff429d55e18$require$EMPTY_STR)=>(path)=>{
        if (typeof path !== $771fcff429d55e18$require$STRING_TYPE) return path;
        return $771fcff429d55e18$var$normalizePathToUnix($jobL2$path.isAbsolute(path) ? path : $jobL2$path.join(cwd, path));
    };
const $771fcff429d55e18$var$getAbsolutePath = (path, cwd)=>{
    if ($jobL2$path.isAbsolute(path)) return path;
    if (path.startsWith($771fcff429d55e18$require$BANG)) return $771fcff429d55e18$require$BANG + $jobL2$path.join(cwd, path.slice(1));
    return $jobL2$path.join(cwd, path);
};
const $771fcff429d55e18$var$undef = (opts, key)=>opts[key] === undefined;
/**
 * Directory entry.
 * @property {Path} path
 * @property {Set<Path>} items
 */ class $771fcff429d55e18$var$DirEntry {
    /**
   * @param {Path} dir
   * @param {Function} removeWatcher
   */ constructor(dir, removeWatcher){
        this.path = dir;
        this._removeWatcher = removeWatcher;
        /** @type {Set<Path>} */ this.items = new Set();
    }
    add(item) {
        const { items: items } = this;
        if (!items) return;
        if (item !== $771fcff429d55e18$require$ONE_DOT && item !== $771fcff429d55e18$require$TWO_DOTS) items.add(item);
    }
    async remove(item) {
        const { items: items } = this;
        if (!items) return;
        items.delete(item);
        if (!items.size) {
            const dir = this.path;
            try {
                await $771fcff429d55e18$var$readdir(dir);
            } catch (err) {
                this._removeWatcher($jobL2$path.dirname(dir), $jobL2$path.basename(dir));
            }
        }
    }
    has(item) {
        const { items: items } = this;
        if (!items) return;
        return items.has(item);
    }
    /**
   * @returns {Array<String>}
   */ getChildren() {
        const { items: items } = this;
        if (!items) return;
        return [
            ...items.values()
        ];
    }
    dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
    }
}
const $771fcff429d55e18$var$STAT_METHOD_F = 'stat';
const $771fcff429d55e18$var$STAT_METHOD_L = 'lstat';
class $771fcff429d55e18$var$WatchHelper {
    constructor(path, watchPath, follow, fsw){
        this.fsw = fsw;
        this.path = path = path.replace($771fcff429d55e18$require$REPLACER_RE, $771fcff429d55e18$require$EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = $jobL2$path.resolve(watchPath);
        this.hasGlob = watchPath !== path;
        /** @type {object|boolean} */ if (path === $771fcff429d55e18$require$EMPTY_STR) this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? undefined : false;
        this.globFilter = this.hasGlob ? $771fcff429d55e18$require$anymatch(path, undefined, $771fcff429d55e18$require$ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path);
        this.dirParts.forEach((parts)=>{
            if (parts.length > 1) parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? $771fcff429d55e18$var$STAT_METHOD_F : $771fcff429d55e18$var$STAT_METHOD_L;
    }
    checkGlobSymlink(entry) {
        // only need to resolve once
        // first entry should always have entry.parentDir === EMPTY_STR
        if (this.globSymlink === undefined) this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : {
            realPath: entry.fullParentDir,
            linkPath: this.fullWatchPath
        };
        if (this.globSymlink) return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        return entry.fullPath;
    }
    entryPath(entry) {
        return $jobL2$path.join(this.watchPath, $jobL2$path.relative(this.watchPath, this.checkGlobSymlink(entry)));
    }
    filterPath(entry) {
        const { stats: stats } = entry;
        if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === $771fcff429d55e18$require$FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
    }
    getDirParts(path) {
        if (!this.hasGlob) return [];
        const parts = [];
        const expandedPath = path.includes($771fcff429d55e18$require$BRACE_START) ? $c84f2449aa2b11a5$exports.expand(path) : [
            path
        ];
        expandedPath.forEach((path)=>{
            parts.push($jobL2$path.relative(this.watchPath, path).split($771fcff429d55e18$require$SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
    }
    filterDir(entry) {
        if (this.hasGlob) {
            const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
            let globstar = false;
            this.unmatchedGlob = !this.dirParts.some((parts)=>{
                return parts.every((part, i)=>{
                    if (part === $771fcff429d55e18$require$GLOBSTAR) globstar = true;
                    return globstar || !entryParts[0][i] || $771fcff429d55e18$require$anymatch(part, entryParts[0][i], $771fcff429d55e18$require$ANYMATCH_OPTS);
                });
            });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
    }
}
/**
 * Watches files & directories for changes. Emitted events:
 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
 *
 *     new FSWatcher()
 *       .add(directories)
 *       .on('add', path => log('File', path, 'was added'))
 */ class $771fcff429d55e18$var$FSWatcher extends $771fcff429d55e18$require$EventEmitter {
    // Not indenting methods for history sake; for now.
    constructor(_opts){
        super();
        const opts = {};
        if (_opts) Object.assign(opts, _opts); // for frozen objects
        /** @type {Map<String, DirEntry>} */ this._watched = new Map();
        /** @type {Map<String, Array>} */ this._closers = new Map();
        /** @type {Set<String>} */ this._ignoredPaths = new Set();
        /** @type {Map<ThrottleType, Map>} */ this._throttled = new Map();
        /** @type {Map<Path, String|Boolean>} */ this._symlinkPaths = new Map();
        this._streams = new Set();
        this.closed = false;
        // Set up default options.
        if ($771fcff429d55e18$var$undef(opts, 'persistent')) opts.persistent = true;
        if ($771fcff429d55e18$var$undef(opts, 'ignoreInitial')) opts.ignoreInitial = false;
        if ($771fcff429d55e18$var$undef(opts, 'ignorePermissionErrors')) opts.ignorePermissionErrors = false;
        if ($771fcff429d55e18$var$undef(opts, 'interval')) opts.interval = 100;
        if ($771fcff429d55e18$var$undef(opts, 'binaryInterval')) opts.binaryInterval = 300;
        if ($771fcff429d55e18$var$undef(opts, 'disableGlobbing')) opts.disableGlobbing = false;
        opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
        // Enable fsevents on OS X when polling isn't explicitly enabled.
        if ($771fcff429d55e18$var$undef(opts, 'useFsEvents')) opts.useFsEvents = !opts.usePolling;
        // If we can't use fsevents, ensure the options reflect it's disabled.
        const canUseFsEvents = $dd63bec0e4ae5025$exports.canUse();
        if (!canUseFsEvents) opts.useFsEvents = false;
        // Use polling on Mac if not using fsevents.
        // Other platforms use non-polling fs_watch.
        if ($771fcff429d55e18$var$undef(opts, 'usePolling') && !opts.useFsEvents) opts.usePolling = $771fcff429d55e18$require$isMacos;
        // Global override (useful for end-developers that need to force polling for all
        // instances of chokidar, regardless of usage/dependency depth)
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== undefined) {
            const envLower = envPoll.toLowerCase();
            if (envLower === 'false' || envLower === '0') opts.usePolling = false;
            else if (envLower === 'true' || envLower === '1') opts.usePolling = true;
            else opts.usePolling = !!envLower;
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) opts.interval = Number.parseInt(envInterval, 10);
        // Editor atomic write normalization enabled by default with fs.watch
        if ($771fcff429d55e18$var$undef(opts, 'atomic')) opts.atomic = !opts.usePolling && !opts.useFsEvents;
        if (opts.atomic) this._pendingUnlinks = new Map();
        if ($771fcff429d55e18$var$undef(opts, 'followSymlinks')) opts.followSymlinks = true;
        if ($771fcff429d55e18$var$undef(opts, 'awaitWriteFinish')) opts.awaitWriteFinish = false;
        if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
        const awf = opts.awaitWriteFinish;
        if (awf) {
            if (!awf.stabilityThreshold) awf.stabilityThreshold = 2000;
            if (!awf.pollInterval) awf.pollInterval = 100;
            this._pendingWrites = new Map();
        }
        if (opts.ignored) opts.ignored = $771fcff429d55e18$var$arrify(opts.ignored);
        let readyCalls = 0;
        this._emitReady = ()=>{
            readyCalls++;
            if (readyCalls >= this._readyCount) {
                this._emitReady = $771fcff429d55e18$require$EMPTY_FN;
                this._readyEmitted = true;
                // use process.nextTick to allow time for listener to be bound
                process.nextTick(()=>this.emit($771fcff429d55e18$require$EV_READY));
            }
        };
        this._emitRaw = (...args)=>this.emit($771fcff429d55e18$require$EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts;
        // Initialize with proper watcher.
        if (opts.useFsEvents) this._fsEventsHandler = new $dd63bec0e4ae5025$exports(this);
        else this._nodeFsHandler = new $8c382650397dddff$exports(this);
        // You’re frozen when your heart’s not open.
        Object.freeze(opts);
    }
    // Public methods
    /**
 * Adds paths to be watched on an existing FSWatcher instance
 * @param {Path|Array<Path>} paths_
 * @param {String=} _origAdd private; for handling non-existent paths to be watched
 * @param {Boolean=} _internal private; indicates a non-user add
 * @returns {FSWatcher} for chaining
 */ add(paths_, _origAdd, _internal) {
        const { cwd: cwd, disableGlobbing: disableGlobbing } = this.options;
        this.closed = false;
        let paths = $771fcff429d55e18$var$unifyPaths(paths_);
        if (cwd) paths = paths.map((path)=>{
            const absPath = $771fcff429d55e18$var$getAbsolutePath(path, cwd);
            // Check `path` instead of `absPath` because the cwd portion can't be a glob
            if (disableGlobbing || !$d77d7e0710dd8be2$exports(path)) return absPath;
            return $ed97ceaedff2b272$exports(absPath);
        });
        // set aside negated glob strings
        paths = paths.filter((path)=>{
            if (path.startsWith($771fcff429d55e18$require$BANG)) {
                this._ignoredPaths.add(path.slice(1));
                return false;
            }
            // if a path is being added that was previously ignored, stop ignoring it
            this._ignoredPaths.delete(path);
            this._ignoredPaths.delete(path + $771fcff429d55e18$require$SLASH_GLOBSTAR);
            // reset the cached userIgnored anymatch fn
            // to make ignoredPaths changes effective
            this._userIgnored = undefined;
            return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
            if (!this._readyCount) this._readyCount = paths.length;
            if (this.options.persistent) this._readyCount *= 2;
            paths.forEach((path)=>this._fsEventsHandler._addToFsEvents(path));
        } else {
            if (!this._readyCount) this._readyCount = 0;
            this._readyCount += paths.length;
            Promise.all(paths.map(async (path)=>{
                const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
                if (res) this._emitReady();
                return res;
            })).then((results)=>{
                if (this.closed) return;
                results.filter((item)=>item).forEach((item)=>{
                    this.add($jobL2$path.dirname(item), $jobL2$path.basename(_origAdd || item));
                });
            });
        }
        return this;
    }
    /**
 * Close watchers or start ignoring events from specified paths.
 * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
 * @returns {FSWatcher} for chaining
*/ unwatch(paths_) {
        if (this.closed) return this;
        const paths = $771fcff429d55e18$var$unifyPaths(paths_);
        const { cwd: cwd } = this.options;
        paths.forEach((path)=>{
            // convert to absolute path unless relative path already matches
            if (!$jobL2$path.isAbsolute(path) && !this._closers.has(path)) {
                if (cwd) path = $jobL2$path.join(cwd, path);
                path = $jobL2$path.resolve(path);
            }
            this._closePath(path);
            this._ignoredPaths.add(path);
            if (this._watched.has(path)) this._ignoredPaths.add(path + $771fcff429d55e18$require$SLASH_GLOBSTAR);
            // reset the cached userIgnored anymatch fn
            // to make ignoredPaths changes effective
            this._userIgnored = undefined;
        });
        return this;
    }
    /**
 * Close watchers and remove all listeners from watched paths.
 * @returns {Promise<void>}.
*/ close() {
        if (this.closed) return this;
        this.closed = true;
        // Memory management.
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList)=>closerList.forEach((closer)=>{
                const promise = closer();
                if (promise instanceof Promise) closers.push(promise);
            }));
        this._streams.forEach((stream)=>stream.destroy());
        this._userIgnored = undefined;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent)=>dirent.dispose());
        [
            'closers',
            'watched',
            'streams',
            'symlinkPaths',
            'throttled'
        ].forEach((key)=>{
            this[`_${key}`].clear();
        });
        return closers.length ? Promise.all(closers).then(()=>undefined) : Promise.resolve();
    }
    /**
 * Expose list of watched paths
 * @returns {Object} for chaining
*/ getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir)=>{
            const key = this.options.cwd ? $jobL2$path.relative(this.options.cwd, dir) : dir;
            watchList[key || $771fcff429d55e18$require$ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
    }
    emitWithAll(event, args) {
        this.emit(...args);
        if (event !== $771fcff429d55e18$require$EV_ERROR) this.emit($771fcff429d55e18$require$EV_ALL, ...args);
    }
    // Common helpers
    // --------------
    /**
 * Normalize and emit events.
 * Calling _emit DOES NOT MEAN emit() would be called!
 * @param {EventName} event Type of event
 * @param {Path} path File or directory path
 * @param {*=} val1 arguments to be passed with event
 * @param {*=} val2
 * @param {*=} val3
 * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
 */ async _emit(event, path, val1, val2, val3) {
        if (this.closed) return;
        const opts = this.options;
        if ($771fcff429d55e18$require$isWindows) path = $jobL2$path.normalize(path);
        if (opts.cwd) path = $jobL2$path.relative(opts.cwd, path);
        /** @type Array<any> */ const args = [
            event,
            path
        ];
        if (val3 !== undefined) args.push(val1, val2, val3);
        else if (val2 !== undefined) args.push(val1, val2);
        else if (val1 !== undefined) args.push(val1);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
            pw.lastChange = new Date();
            return this;
        }
        if (opts.atomic) {
            if (event === $771fcff429d55e18$require$EV_UNLINK) {
                this._pendingUnlinks.set(path, args);
                setTimeout(()=>{
                    this._pendingUnlinks.forEach((entry, path)=>{
                        this.emit(...entry);
                        this.emit($771fcff429d55e18$require$EV_ALL, ...entry);
                        this._pendingUnlinks.delete(path);
                    });
                }, typeof opts.atomic === 'number' ? opts.atomic : 100);
                return this;
            }
            if (event === $771fcff429d55e18$require$EV_ADD && this._pendingUnlinks.has(path)) {
                event = args[0] = $771fcff429d55e18$require$EV_CHANGE;
                this._pendingUnlinks.delete(path);
            }
        }
        if (awf && (event === $771fcff429d55e18$require$EV_ADD || event === $771fcff429d55e18$require$EV_CHANGE) && this._readyEmitted) {
            const awfEmit = (err, stats)=>{
                if (err) {
                    event = args[0] = $771fcff429d55e18$require$EV_ERROR;
                    args[1] = err;
                    this.emitWithAll(event, args);
                } else if (stats) {
                    // if stats doesn't exist the file must have been deleted
                    if (args.length > 2) args[2] = stats;
                    else args.push(stats);
                    this.emitWithAll(event, args);
                }
            };
            this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
            return this;
        }
        if (event === $771fcff429d55e18$require$EV_CHANGE) {
            const isThrottled = !this._throttle($771fcff429d55e18$require$EV_CHANGE, path, 50);
            if (isThrottled) return this;
        }
        if (opts.alwaysStat && val1 === undefined && (event === $771fcff429d55e18$require$EV_ADD || event === $771fcff429d55e18$require$EV_ADD_DIR || event === $771fcff429d55e18$require$EV_CHANGE)) {
            const fullPath = opts.cwd ? $jobL2$path.join(opts.cwd, path) : path;
            try {
                const stats = await $771fcff429d55e18$var$stat(fullPath);
                // Suppress event when fs_stat fails, to avoid sending undefined 'stat'
                if (!stats) return;
                args.push(stats);
                this.emitWithAll(event, args);
            } catch (err) {}
        } else this.emitWithAll(event, args);
        return this;
    }
    /**
 * Common handler for errors
 * @param {Error} error
 * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
 */ _handleError(error) {
        const code = error && error.code;
        if (error && code !== 'ENOENT' && code !== 'ENOTDIR' && (!this.options.ignorePermissionErrors || code !== 'EPERM' && code !== 'EACCES')) this.emit($771fcff429d55e18$require$EV_ERROR, error);
        return error || this.closed;
    }
    /**
 * Helper utility for throttling
 * @param {ThrottleType} actionType type being throttled
 * @param {Path} path being acted upon
 * @param {Number} timeout duration of time to suppress duplicate actions
 * @returns {Object|false} tracking object or false if action should be suppressed
 */ _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) this._throttled.set(actionType, new Map());
        /** @type {Map<Path, Object>} */ const action = this._throttled.get(actionType);
        /** @type {Object} */ const actionPath = action.get(path);
        if (actionPath) {
            actionPath.count++;
            return false;
        }
        let timeoutObject;
        const clear = ()=>{
            const item = action.get(path);
            const count = item ? item.count : 0;
            action.delete(path);
            clearTimeout(timeoutObject);
            if (item) clearTimeout(item.timeoutObject);
            return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = {
            timeoutObject: timeoutObject,
            clear: clear,
            count: 0
        };
        action.set(path, thr);
        return thr;
    }
    _incrReadyCount() {
        return this._readyCount++;
    }
    /**
 * Awaits write operation to finish.
 * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
 * @param {Path} path being acted upon
 * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
 * @param {EventName} event
 * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
 */ _awaitWriteFinish(path, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !$jobL2$path.isAbsolute(path)) fullPath = $jobL2$path.join(this.options.cwd, path);
        const now = new Date();
        const awaitWriteFinish = (prevStat)=>{
            $jobL2$fs.stat(fullPath, (err, curStat)=>{
                if (err || !this._pendingWrites.has(path)) {
                    if (err && err.code !== 'ENOENT') awfEmit(err);
                    return;
                }
                const now = Number(new Date());
                if (prevStat && curStat.size !== prevStat.size) this._pendingWrites.get(path).lastChange = now;
                const pw = this._pendingWrites.get(path);
                const df = now - pw.lastChange;
                if (df >= threshold) {
                    this._pendingWrites.delete(path);
                    awfEmit(undefined, curStat);
                } else timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval, curStat);
            });
        };
        if (!this._pendingWrites.has(path)) {
            this._pendingWrites.set(path, {
                lastChange: now,
                cancelWait: ()=>{
                    this._pendingWrites.delete(path);
                    clearTimeout(timeoutHandler);
                    return event;
                }
            });
            timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval);
        }
    }
    _getGlobIgnored() {
        return [
            ...this._ignoredPaths.values()
        ];
    }
    /**
 * Determines whether user has asked to ignore this path.
 * @param {Path} path filepath or dir
 * @param {fs.Stats=} stats result of fs.stat
 * @returns {Boolean}
 */ _isIgnored(path, stats) {
        if (this.options.atomic && $771fcff429d55e18$require$DOT_RE.test(path)) return true;
        if (!this._userIgnored) {
            const { cwd: cwd } = this.options;
            const ign = this.options.ignored;
            const ignored = ign && ign.map($771fcff429d55e18$var$normalizeIgnored(cwd));
            const paths = $771fcff429d55e18$var$arrify(ignored).filter((path)=>typeof path === $771fcff429d55e18$require$STRING_TYPE && !$d77d7e0710dd8be2$exports(path)).map((path)=>path + $771fcff429d55e18$require$SLASH_GLOBSTAR);
            const list = this._getGlobIgnored().map($771fcff429d55e18$var$normalizeIgnored(cwd)).concat(ignored, paths);
            this._userIgnored = $771fcff429d55e18$require$anymatch(list, undefined, $771fcff429d55e18$require$ANYMATCH_OPTS);
        }
        return this._userIgnored([
            path,
            stats
        ]);
    }
    _isntIgnored(path, stat) {
        return !this._isIgnored(path, stat);
    }
    /**
 * Provides a set of common helpers and properties relating to symlink and glob handling.
 * @param {Path} path file, directory, or glob pattern being watched
 * @param {Number=} depth at any depth > 0, this isn't a glob
 * @returns {WatchHelper} object containing helpers for this path
 */ _getWatchHelpers(path, depth) {
        const watchPath = depth || this.options.disableGlobbing || !$d77d7e0710dd8be2$exports(path) ? path : $461032e8f4d19019$exports(path);
        const follow = this.options.followSymlinks;
        return new $771fcff429d55e18$var$WatchHelper(path, watchPath, follow, this);
    }
    // Directory helpers
    // -----------------
    /**
 * Provides directory tracking objects
 * @param {String} directory path of the directory
 * @returns {DirEntry} the directory's tracking object
 */ _getWatchedDir(directory) {
        if (!this._boundRemove) this._boundRemove = this._remove.bind(this);
        const dir = $jobL2$path.resolve(directory);
        if (!this._watched.has(dir)) this._watched.set(dir, new $771fcff429d55e18$var$DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
    }
    // File helpers
    // ------------
    /**
 * Check for read permissions.
 * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
 * @param {fs.Stats} stats - object, result of fs_stat
 * @returns {Boolean} indicates whether the file can be read
*/ _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors) return true;
        // stats.mode may be bigint
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
    }
    /**
 * Handles emitting unlink events for
 * files and directories, and via recursion, for
 * files and directories within directories that are unlinked
 * @param {String} directory within which the following item is located
 * @param {String} item      base path of item/directory
 * @returns {void}
*/ _remove(directory, item) {
        // if what is being deleted is a directory, get that directory's paths
        // for recursive deleting and cleaning of watched object
        // if it is not a directory, nestedDirectoryChildren will be empty array
        const path = $jobL2$path.join(directory, item);
        const fullPath = $jobL2$path.resolve(path);
        const isDirectory = this._watched.has(path) || this._watched.has(fullPath);
        // prevent duplicate handling in case of arriving here nearly simultaneously
        // via multiple paths (such as _handleFile and _handleDir)
        if (!this._throttle('remove', path, 100)) return;
        // if the only watched file is removed, watch for its return
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) this.add(directory, item, true);
        // This will create a new entry in the watched object in either case
        // so we got to do the directory check beforehand
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        // Recursively remove children directories / files.
        nestedDirectoryChildren.forEach((nested)=>this._remove(path, nested));
        // Check if item was on the watched list and remove it
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        // If we wait for this file to be fully written, cancel the wait.
        let relPath = path;
        if (this.options.cwd) relPath = $jobL2$path.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
            const event = this._pendingWrites.get(relPath).cancelWait();
            if (event === $771fcff429d55e18$require$EV_ADD) return;
        }
        // The Entry will either be a directory that just got removed
        // or a bogus entry to a file, in either case we have to remove it
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? $771fcff429d55e18$require$EV_UNLINK_DIR : $771fcff429d55e18$require$EV_UNLINK;
        if (wasTracked && !this._isIgnored(path)) this._emit(eventName, path);
        // Avoid conflicts if we later create another file with the same name
        if (!this.options.useFsEvents) this._closePath(path);
    }
    /**
 *
 * @param {Path} path
 */ _closePath(path) {
        const closers = this._closers.get(path);
        if (!closers) return;
        closers.forEach((closer)=>closer());
        this._closers.delete(path);
        const dir = $jobL2$path.dirname(path);
        this._getWatchedDir(dir).remove($jobL2$path.basename(path));
    }
    /**
 *
 * @param {Path} path
 * @param {Function} closer
 */ _addPathCloser(path, closer) {
        if (!closer) return;
        let list = this._closers.get(path);
        if (!list) {
            list = [];
            this._closers.set(path, list);
        }
        list.push(closer);
    }
    _readdirp(root, opts) {
        if (this.closed) return;
        const options = {
            type: $771fcff429d55e18$require$EV_ALL,
            alwaysStat: true,
            lstat: true,
            ...opts
        };
        let stream = $456741e164e4b362$exports(root, options);
        this._streams.add(stream);
        stream.once($771fcff429d55e18$require$STR_CLOSE, ()=>{
            stream = undefined;
        });
        stream.once($771fcff429d55e18$require$STR_END, ()=>{
            if (stream) {
                this._streams.delete(stream);
                stream = undefined;
            }
        });
        return stream;
    }
}
$771fcff429d55e18$export$552f5da8b13f69c4 = $771fcff429d55e18$var$FSWatcher;
/**
 * Instantiates watcher with paths to be tracked.
 * @param {String|Array<String>} paths file/directory paths and/or globs
 * @param {Object=} options chokidar opts
 * @returns an instance of FSWatcher for chaining.
 */ const $771fcff429d55e18$var$watch = (paths, options)=>{
    const watcher = new $771fcff429d55e18$var$FSWatcher(options);
    watcher.add(paths);
    return watcher;
};
$771fcff429d55e18$export$3db5d71bdb2d5499 = $771fcff429d55e18$var$watch;


class $27eaa98c9bbb9ca3$export$2e2bcd8739ae039 {
    constructor(pathname){
        // collect disposables
        this.subscriptions = new (0, $jobL2$atom.CompositeDisposable)();
        // remember pathname of PDF
        this.pdfPathname = pathname;
        // parse pathname into parts
        this.pathnameParts = (0, ($parcel$interopDefault($jobL2$path))).parse(pathname);
        // path for (modified) PDF.js viewer.html
        const viewerPathname = (0, ($parcel$interopDefault($jobL2$path))).join(atom.packages.getLoadedPackage('pulsar-pdf-viewer').path, 'pdfjs', 'web', 'viewer.html');
        // create iframe as root element of view
        this.element = document.createElement('iframe');
        this.element.classList.add('pdf-viewer');
        this.element.src = viewerPathname + '?file=' + pathname;
        // finish initialization when PDF viewer is loaded
        this.element.addEventListener('load', ()=>this.viewerLoaded());
    }
    // finish initialization
    viewerLoaded() {
        // ensure containing directory exists, so that watching works
        (0, (/*@__PURE__*/$parcel$interopDefault($19aab20b2ea5b99f$exports))).ensureDirSync(this.pathnameParts.dir);
        // watch for changes of PDF file
        console.log('watching for ' + this.pdfPathname);
        this.fswatcher = (0, (/*@__PURE__*/$parcel$interopDefault($771fcff429d55e18$exports))).watch(this.pdfPathname);
        this.fswatcher.on('add', (path)=>this.handleFilechange('add', path));
        this.fswatcher.on('change', (path)=>this.handleFilechange('change', path));
        console.log(this.fswatcher);
        // inject style
        // this.injectStyle()
        // inject style again when theme changed
        this.subscriptions.add();
        // make external links functional
        this.element.contentWindow.addEventListener('click', (event)=>this.handleLink(event));
        // control keyboard shortcuts
        this.element.contentWindow.addEventListener('keydown', (event)=>this.handleKey(event), true);
        // control printing
        //   Ctrl-P doesn't even reach the keydown event listener.
        // Instead, we have to override the print function:
        this.element.contentWindow.print = ()=>this.handlePrint();
    // // SyncTeX through right-click
    // this.element.contentWindow.addEventListener('contextmenu',
    //   (event) => this.handleSynctex(event))
    }
    // compile the viewer-specific LESS into CSS
    // and inject it into the viewer iframe's style element
    injectStyle() {
        const lessFile = (0, ($parcel$interopDefault($jobL2$path))).join(atom.packages.getLoadedPackage('pulsar-pdf-viewer').path, 'pdfjs', 'web', 'viewer.less');
        var css = atom.themes.loadLessStylesheet(lessFile);
        const invertColors = atom.config.get('pulsar-pdf-viewer.invertColors');
        if (invertColors) css += '.page, .thumbnailImage {filter: invert(100%);}\n';
        this.element.contentDocument.getElementById('viewer-less').innerText = css;
    }
    // handle clicks on external links
    handleLink(event) {
        // only left click, no modifiers, on 'a' element with '_top' target
        // 'meta' is not actually detected, and 'alt' clicks never make it here
        if (event.button == 0 && !event.ctrlKey && !event.shiftKey && // !event.altKey && !event.metaKey &&
        event.target.tagName == 'A' && event.target.target == '_top') // open externally
        (0, $jobL2$electron.shell).openExternal(event.target.href);
    }
    // handle keypresses
    //   To suppress keypresses being handled by the PDF.js viewer,
    // two things are necessary:
    // 1) above: ….contentWindow.addEventListener('keydown', …, true)
    // 2) here: event.stopPropagation()
    // This lets Atom's keypress handler take over.
    //   To instead suppress Atom's handling, use event.preventDefault().
    handleKey(event) {
        switch(event.keyCode){
            // let (Shift-)Ctrl-S be handled by Atom: File/Save (instead of PDF save)
            case 83:
                if (event.ctrlKey) event.stopPropagation();
                break;
            // let F4 be handled by the viewer: toggle sidebar
            case 115:
                if (!event.ctrlKey && !event.shiftKey) event.preventDefault();
                break;
            // let Ctrl-C be handled by Atom: Copy (instead of nothing)
            case 67:
                if (event.ctrlKey && !event.shiftKey) event.stopPropagation();
                break;
        }
    }
    // handle print requests
    handlePrint() {
        console.log('PdfViewerView.handlePrint');
        // For now, instead of printing, we simulate the effect Ctrl-P would have
        // had on the HTML element containing the PDF viewer.
        const container = this.element.parentElement;
        //   get Atom command from keystroke
        const command = atom.keymaps.findKeyBindings({
            keystrokes: 'ctrl-p',
            target: container
        })[0].command;
        // dispatch Atom command
        atom.commands.dispatch(container, command);
    }
    // determine page position of mouse click,
    // and call SyncTeX to obtain (La-)TeX source line number
    handleSynctex(event) {
        // get enclosing page div
        const page = event.target.closest('div.page');
        if (!page) return;
        // get page number
        const pageNo = parseInt(page.getAttribute('data-page-number'), 10);
        if (isNaN(pageNo)) return;
        // compute mouse coordinates relative to canvas element
        // taking rotation into account
        const bounds = page.querySelector('canvas').getBoundingClientRect();
        const rot = this.element.contentWindow.PDFViewerApplication.pdfViewer.pagesRotation;
        switch(rot){
            case 0:
                var x = event.clientX - bounds.left;
                var y = event.clientY - bounds.top;
                break;
            case 90:
                var x = event.clientY - bounds.top;
                var y = bounds.right - event.clientX;
                break;
            case 180:
                var x = bounds.right - event.clientX;
                var y = bounds.bottom - event.clientY;
                break;
            case 270:
                var x = bounds.bottom - event.clientY;
                var y = event.clientX - bounds.left;
                break;
        }
        // get PDF view resolution, assuming that currentScale is relative to a
        // fixed browser resolution of 96 dpi; see viewer.js line 3390.
        const res = this.element.contentWindow.PDFViewerApplication.pdfViewer.currentScale * 96;
        // compute coordinates in points (TeX bp)
        x = Math.round(x / res * 72);
        y = Math.round(y / res * 72);
        // call SyncTeX
        const command = atom.config.get('pulsar-pdf-viewer.synctexPath');
        const args = [
            'edit',
            '-o',
            pageNo + ':' + x + ':' + y + ':' + this.pdfPathname
        ];
        var synctex = {} // to collect SyncTeX output values
        ;
        const stdout = (output)=>this.synctexStdout(output, synctex);
        const exit = (code)=>this.synctexExit(code, synctex);
        new (0, $jobL2$atom.BufferedProcess)({
            command: command,
            args: args,
            stdout: stdout,
            exit: exit
        }).onWillThrowError((errorObject)=>{
            errorObject.handle();
            atom.notifications.addError('Could not run SyncTeX', {
                description: 'Make sure `' + command + '` is installed and on your PATH'
            });
        });
        console.log('PdfViewerView: ' + command + ' ' + args.join(' '));
    }
    // parse SyncTeX output for values
    synctexStdout(output, synctex) {
        // split buffered lines
        lines = output.split(/\r?\n/g);
        for (let line of lines){
            if (line.startsWith('Input:')) synctex.input = line.substr(6);
            if (line.startsWith('Line:')) {
                let value = line.substr(5);
                synctex.line = parseInt(value, 10);
            }
        }
    }
    // upon SyncTeX exit, open source file at line number
    synctexExit(code, synctex) {
        if (code == 0) {
            console.log('PdfViewerView: Opening SyncTeX result: line ' + synctex.line + ' of ' + synctex.input);
            atom.workspace.open(synctex.input, {
                initialLine: synctex.line - 1,
                searchAllPanes: true
            });
        } else console.log('PdfViewerView: SyncTeX failed with code ' + code);
    }
    // handle changes to PDF file
    handleFilechange(event, path) {
        console.log('PdfViewerView: file', event, path);
        this.reloadPdf();
    }
    // reload PDF file
    reloadPdf() {
        const win = this.element.contentWindow;
        if (win) {
            console.log('PdfViewerView: reloading PDF');
            const overrideFingerprint = atom.config.get('pulsar-pdf-viewer.overrideFingerprint');
            if (!overrideFingerprint) {
                win.PDFViewerApplication.close();
                win.PDFViewerApplication.open(this.pdfPathname);
            } else // Using the trick to override the PDF ID from
            // https://github.com/mozilla/pdf.js/issues/11359#issuecomment-659154737
            win.pdfjsLib.getDocument(this.pdfPathname).promise.then((doc)=>{
                console.log('PdfViewerView: overriding fingerprint');
                doc._pdfInfo.fingerprint = this.pdfPathname;
                win.PDFViewerApplication.load(doc);
            });
        } else console.log('PdfViewerView: cannot (yet) reload PDF');
    }
    serialize() {
        return {
            deserializer: 'PdfViewerView',
            data: this.pdfPathname
        };
    }
    destroy() {
        if (this.fswatcher) this.fswatcher.unwatch(this.pdfPathname);
        this.subscriptions.dispose();
        this.element.remove();
    }
    getElement() {
        return this.element;
    }
    getTitle() {
        return this.pathnameParts.base;
    }
    getURI() {
        return this.pdfPathname;
    }
    getPreferredWidth() {
        // half the window width, or 844 pixels, whichever is smaller
        //   844 pixels is the smallest pane width at which a Letter-format page
        // (slightly wider than A4) displayed at 100% does not lead to horizontal
        // scrolling.
        return Math.min(Math.floor(atom.windowDimensions.width / 2), 844);
    }
}



var $e3844875fba73d3c$export$2e2bcd8739ae039 = {
    'config': {
        'disableValidation': {
            'title': 'Disable URL Validation',
            'description': 'The PDF.js viewer by default prevents files to be loaded from hosts different from the viewer\'s. For this package, it prevents to load PDFs from anywhere but the local disk. This setting disables validation, allowing files to be loaded from any URL.',
            'type': 'boolean',
            'default': 'true'
        },
        'overrideFingerprint': {
            'title': 'Override PDF ID',
            'description': 'When a PDF is loaded in an existing viewer, PDF.js compares the ID embedded in the PDF (it\'s "fingerprint") with the previous one and resets the view (position, zoom, etc.) if they are different. This can happen even for the "same" document if it is dynamically regenerated, e.g. by LaTeX. If this option is checked, the PDF ID is overwritten by the pathname of the document, so view properties should stay the same as long as the pathname stays the same. __experimental__',
            'type': 'boolean',
            'default': 'false'
        },
        'invertColors': {
            'title': 'Invert PDF colors',
            'description': 'This is intended to provide a better match for dark UI themes. Needs reload of the PDF viewer tab.',
            'type': 'boolean',
            'default': 'false'
        },
        'synctexPath': {
            'title': 'Path to SyncTeX binary',
            'description': 'Used for reverse lookup, if the PDF has been generatedby *TeX with SyncTeX.',
            'type': 'string',
            'default': 'synctex'
        }
    },
    subscriptions: null,
    activate () {
        this.subscriptions = new (0, $jobL2$atom.CompositeDisposable)();
        // add opener for PDFs to workspace
        this.subscriptions.add(atom.workspace.addOpener((uri)=>{
            if (uri.endsWith('.pdf')) return new (0, $27eaa98c9bbb9ca3$export$2e2bcd8739ae039)(uri);
        }));
    },
    deactivate () {
        this.subscriptions.dispose();
    },
    deserializeView (state) {
        return new (0, $27eaa98c9bbb9ca3$export$2e2bcd8739ae039)(state.data);
    }
};


//# sourceMappingURL=main.js.map
