window.BENCHMARK_DATA = {
  lastUpdate: 1642132642367,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: 'cbbccf2084a0c5463a3912ce6b27447fbf8f0ac4',
          message:
            'Merge pull request #1029 from napi-rs/fix-clippy\n\nfix(napi): clippy error on 1.58',
          timestamp: '2022-01-14T11:48:25+08:00',
          tree_id: '341f7b701cab8f7631382fdd5f6ec90519a606b3',
          url: 'https://github.com/napi-rs/napi-rs/commit/cbbccf2084a0c5463a3912ce6b27447fbf8f0ac4',
        },
        date: 1642132640650,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 55523883,
            range: '±1.23%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 707036761,
            range: '±1.28%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 18960576,
            range: '±1.25%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 667972296,
            range: '±1.35%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 361141,
            range: '±8.76%',
            unit: 'ops/sec',
            extra: '60 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1786690,
            range: '±3.95%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 35152,
            range: '±1.07%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7250,
            range: '±1.17%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7443,
            range: '±1.13%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16255,
            range: '±1.44%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8857,
            range: '±0.66%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12053,
            range: '±1.26%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 410428,
            range: '±5.09%',
            unit: 'ops/sec',
            extra: '72 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 346020,
            range: '±4.75%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 362195,
            range: '±4.73%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 321958,
            range: '±4.72%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 32136,
            range: '±1.04%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 406,
            range: '±3.47%',
            unit: 'ops/sec',
            extra: '65 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 26160,
            range: '±1.77%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1969,
            range: '±1.06%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 1',
            value: 27058,
            range: '±2.02%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
        ],
      },
    ],
  },
}
