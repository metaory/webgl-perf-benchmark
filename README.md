# webgl-perm-benchmark


> [!NOTE]
> WIP

Currently comparing only two libraries

- https://github.com/firecmsco/neat
- https://github.com/metaory/gradient-gl

```
git clone https://github.com/metaory/webgl-perf-benchmark.git

cd webgl-perm-benchmark

npm install

npm run dev
```

In the `./src/main.js` there is condition switching between the two.

set `1` for `neat`
set `0` for `gradient-gl`

```javascript
const doNeat = 0
```

Enable FPS debugger

devtool > rendering > frame rendering stats

> [!NOTE]
> WIP
