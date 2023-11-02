// provided.js - generated by gradle-jmh-report, 2023-11-02 04:10:29.849

var providedBenchmarks = ['merged-jmh-results'];

var providedBenchmarkStore = {
'merged-jmh-results': 
[
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Baseline_SystemEnv_Int",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 20484.267119858418,
            "scoreError": 301.9275095992276,
            "scoreConfidence": [
                20182.33961025919,
                20786.194629457645
            ],
            "scorePercentiles": {
                "0.0": 20294.535982358928,
                "50.0": 20441.63665877081,
                "90.0": 20919.375792698695,
                "95.0": 20947.651657128536,
                "99.0": 20947.651657128536,
                "99.9": 20947.651657128536,
                "99.99": 20947.651657128536,
                "99.999": 20947.651657128536,
                "99.9999": 20947.651657128536,
                "100.0": 20947.651657128536
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    20326.23645592562,
                    20546.088543446775,
                    20316.6668753793,
                    20405.107098168675,
                    20294.535982358928
                ],
                [
                    20478.166219372946,
                    20373.0478524126,
                    20664.893012830125,
                    20947.651657128536,
                    20490.2775015607
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Baseline_SystemEnv_String",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 28054.407873926357,
            "scoreError": 2153.9237883779165,
            "scoreConfidence": [
                25900.48408554844,
                30208.331662304274
            ],
            "scorePercentiles": {
                "0.0": 25364.524445476578,
                "50.0": 28454.419213481793,
                "90.0": 29420.068116663915,
                "95.0": 29423.24021219781,
                "99.0": 29423.24021219781,
                "99.9": 29423.24021219781,
                "99.99": 29423.24021219781,
                "99.999": 29423.24021219781,
                "99.9999": 29423.24021219781,
                "100.0": 29423.24021219781
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    27632.95757639839,
                    27935.511042613394,
                    27160.960954225353,
                    26318.68833564516,
                    25364.524445476578
                ],
                [
                    28973.327384350196,
                    29055.805706768988,
                    29287.543824728873,
                    29391.51925685887,
                    29423.24021219781
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Baseline_SystemProperty_Int",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 56453.14754425455,
            "scoreError": 4491.440588938143,
            "scoreConfidence": [
                51961.706955316404,
                60944.588133192694
            ],
            "scorePercentiles": {
                "0.0": 51972.932487651684,
                "50.0": 56050.78544459068,
                "90.0": 60077.738698719426,
                "95.0": 60091.631145802625,
                "99.0": 60091.631145802625,
                "99.9": 60091.631145802625,
                "99.99": 60091.631145802625,
                "99.999": 60091.631145802625,
                "99.9999": 60091.631145802625,
                "100.0": 60091.631145802625
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    58620.765295889556,
                    59952.70667497065,
                    59626.61482522531,
                    60091.631145802625,
                    56837.86311129467
                ],
                [
                    55263.70777788669,
                    54357.39937675859,
                    51972.932487651684,
                    53628.10567527235,
                    54179.74907179333
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Baseline_SystemProperty_String",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 172342.2144793591,
            "scoreError": 6442.874708593346,
            "scoreConfidence": [
                165899.33977076574,
                178785.08918795246
            ],
            "scorePercentiles": {
                "0.0": 165649.14535293603,
                "50.0": 172887.9548680328,
                "90.0": 177692.1659141997,
                "95.0": 177764.75778578487,
                "99.0": 177764.75778578487,
                "99.9": 177764.75778578487,
                "99.99": 177764.75778578487,
                "99.999": 177764.75778578487,
                "99.9999": 177764.75778578487,
                "100.0": 177764.75778578487
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    172598.13472686787,
                    176369.97392501344,
                    174884.5280984996,
                    177038.83906993325,
                    177764.75778578487
                ],
                [
                    165649.14535293603,
                    168942.14351912614,
                    169644.94394544992,
                    173177.77500919774,
                    167351.90336078193
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Baseline_SystemEnv_Int",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 48.58767184464584,
            "scoreError": 1.2833885804299447,
            "scoreConfidence": [
                47.3042832642159,
                49.87106042507578
            ],
            "scorePercentiles": {
                "0.0": 47.32294642007465,
                "50.0": 48.616661664654046,
                "90.0": 50.150236259987345,
                "95.0": 50.25682699467722,
                "99.0": 50.25682699467722,
                "99.9": 50.25682699467722,
                "99.99": 50.25682699467722,
                "99.999": 50.25682699467722,
                "99.9999": 50.25682699467722,
                "100.0": 50.25682699467722
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    48.860132597258726,
                    48.82831834264888,
                    49.190919647778465,
                    48.2636078877377,
                    48.242123823842675
                ],
                [
                    47.50425062119876,
                    47.32294642007465,
                    48.405004986659215,
                    49.002587124582114,
                    50.25682699467722
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Baseline_SystemEnv_String",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 34.65876423979956,
            "scoreError": 0.8408172745651756,
            "scoreConfidence": [
                33.817946965234384,
                35.499581514364735
            ],
            "scorePercentiles": {
                "0.0": 33.82986188288258,
                "50.0": 34.76117053168318,
                "90.0": 35.30510157148729,
                "95.0": 35.31159913355874,
                "99.0": 35.31159913355874,
                "99.9": 35.31159913355874,
                "99.99": 35.31159913355874,
                "99.999": 35.31159913355874,
                "99.9999": 35.31159913355874,
                "100.0": 35.31159913355874
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    33.863106811041206,
                    35.03352745300659,
                    34.79299153977538,
                    35.0473435886608,
                    35.31159913355874
                ],
                [
                    34.72934952359098,
                    34.6880627218816,
                    35.24662351284425,
                    33.82986188288258,
                    34.04517623075342
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Baseline_SystemProperty_Int",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 16.461739242451355,
            "scoreError": 0.8730739602010833,
            "scoreConfidence": [
                15.588665282250272,
                17.334813202652438
            ],
            "scorePercentiles": {
                "0.0": 15.700169888913155,
                "50.0": 16.396438897106385,
                "90.0": 17.189736106815854,
                "95.0": 17.19105166841886,
                "99.0": 17.19105166841886,
                "99.9": 17.19105166841886,
                "99.99": 17.19105166841886,
                "99.999": 17.19105166841886,
                "99.9999": 17.19105166841886,
                "100.0": 17.19105166841886
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    17.17789605238877,
                    17.19105166841886,
                    16.929890020011598,
                    16.914282265592124,
                    16.72624636799747
                ],
                [
                    16.066631426215302,
                    15.932911180588947,
                    16.000703274979543,
                    15.977610279407779,
                    15.700169888913155
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Baseline_SystemProperty_String",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 5.3161101312132235,
            "scoreError": 0.09574254211382711,
            "scoreConfidence": [
                5.220367589099396,
                5.411852673327051
            ],
            "scorePercentiles": {
                "0.0": 5.267834156806805,
                "50.0": 5.289704968649819,
                "90.0": 5.436406956808707,
                "95.0": 5.43699985811643,
                "99.0": 5.43699985811643,
                "99.9": 5.43699985811643,
                "99.99": 5.43699985811643,
                "99.999": 5.43699985811643,
                "99.9999": 5.43699985811643,
                "100.0": 5.43699985811643
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    5.43699985811643,
                    5.431070845039202,
                    5.2868528133324,
                    5.311898288249181,
                    5.293348687750278
                ],
                [
                    5.287592582292858,
                    5.271655495700956,
                    5.267834156806805,
                    5.291817355006781,
                    5.2820312298373535
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Cfg4j_GetProperty_Int",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 36.23343128590048,
            "scoreError": 0.735909147152701,
            "scoreConfidence": [
                35.497522138747776,
                36.96934043305318
            ],
            "scorePercentiles": {
                "0.0": 35.787720839494035,
                "50.0": 36.113947447229194,
                "90.0": 37.27159663522786,
                "95.0": 37.313401131467444,
                "99.0": 37.313401131467444,
                "99.9": 37.313401131467444,
                "99.99": 37.313401131467444,
                "99.999": 37.313401131467444,
                "99.9999": 37.313401131467444,
                "100.0": 37.313401131467444
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    36.895356169071576,
                    35.787720839494035,
                    36.17312514932233,
                    35.89308313960279,
                    36.09011372542087
                ],
                [
                    35.92639003940684,
                    35.94743562859995,
                    36.13778116903751,
                    36.169905867581484,
                    37.313401131467444
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Cfg4j_GetProperty_String",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 35.55452128633325,
            "scoreError": 1.3632078445562088,
            "scoreConfidence": [
                34.19131344177704,
                36.917729130889455
            ],
            "scorePercentiles": {
                "0.0": 34.09064866803818,
                "50.0": 35.59843580307651,
                "90.0": 37.11174104976312,
                "95.0": 37.19850849115658,
                "99.0": 37.19850849115658,
                "99.9": 37.19850849115658,
                "99.99": 37.19850849115658,
                "99.999": 37.19850849115658,
                "99.9999": 37.19850849115658,
                "100.0": 37.19850849115658
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    36.330834077221944,
                    36.05783926768692,
                    35.83128280621276,
                    37.19850849115658,
                    35.80248954310654
                ],
                [
                    35.39438206304649,
                    35.2286435000546,
                    34.09064866803818,
                    35.1391935660673,
                    34.471390880741104
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Cfg4j_Int",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 36.04066181639378,
            "scoreError": 0.6905101950766279,
            "scoreConfidence": [
                35.35015162131715,
                36.731172011470406
            ],
            "scorePercentiles": {
                "0.0": 35.06982684036104,
                "50.0": 36.02648659014763,
                "90.0": 36.755969898685976,
                "95.0": 36.79564035445709,
                "99.0": 36.79564035445709,
                "99.9": 36.79564035445709,
                "99.99": 36.79564035445709,
                "99.999": 36.79564035445709,
                "99.9999": 36.79564035445709,
                "100.0": 36.79564035445709
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    35.86882910457604,
                    36.39893579674595,
                    36.3463742117017,
                    35.791667104513586,
                    36.20098698637572
                ],
                [
                    36.79564035445709,
                    36.01997022058472,
                    36.03300295971054,
                    35.88138458491141,
                    35.06982684036104
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Thrpt.Cfg4j_String",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 35.75679589188131,
            "scoreError": 0.9899273244800857,
            "scoreConfidence": [
                34.766868567401225,
                36.746723216361396
            ],
            "scorePercentiles": {
                "0.0": 34.368017913267316,
                "50.0": 35.83784971018895,
                "90.0": 36.77566311754573,
                "95.0": 36.82119764599344,
                "99.0": 36.82119764599344,
                "99.9": 36.82119764599344,
                "99.99": 36.82119764599344,
                "99.999": 36.82119764599344,
                "99.9999": 36.82119764599344,
                "100.0": 36.82119764599344
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    35.835738436501074,
                    36.01177932090108,
                    35.325772029501735,
                    35.455060007475076,
                    34.368017913267316
                ],
                [
                    35.584535151126346,
                    36.36585236151636,
                    36.82119764599344,
                    35.96004506865387,
                    35.83996098387682
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Cfg4j_GetProperty_Int",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 27396.26810801198,
            "scoreError": 537.246319743482,
            "scoreConfidence": [
                26859.0217882685,
                27933.51442775546
            ],
            "scorePercentiles": {
                "0.0": 26920.612409360314,
                "50.0": 27329.69987821606,
                "90.0": 27949.46044650238,
                "95.0": 27965.71984788323,
                "99.0": 27965.71984788323,
                "99.9": 27965.71984788323,
                "99.99": 27965.71984788323,
                "99.999": 27965.71984788323,
                "99.9999": 27965.71984788323,
                "100.0": 27965.71984788323
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    27303.83164635744,
                    27212.796025992684,
                    27627.96275505412,
                    27965.71984788323,
                    27803.125834074734
                ],
                [
                    26927.991174539624,
                    26920.612409360314,
                    27648.623030772207,
                    27355.568110074677,
                    27196.45024601082
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Cfg4j_GetProperty_String",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 27842.204148234596,
            "scoreError": 1004.8047842697974,
            "scoreConfidence": [
                26837.3993639648,
                28847.008932504392
            ],
            "scorePercentiles": {
                "0.0": 26654.525251771727,
                "50.0": 28068.336740961007,
                "90.0": 28483.502021776494,
                "95.0": 28486.810073721274,
                "99.0": 28486.810073721274,
                "99.9": 28486.810073721274,
                "99.99": 28486.810073721274,
                "99.999": 28486.810073721274,
                "99.9999": 28486.810073721274,
                "100.0": 28486.810073721274
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    27819.000172440647,
                    28428.70497067382,
                    27446.61913413878,
                    26818.068030202277,
                    26654.525251771727
                ],
                [
                    28453.72955427349,
                    28486.810073721274,
                    27995.757202590525,
                    28177.91081320192,
                    28140.916279331494
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Cfg4j_Int",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 27885.321520467067,
            "scoreError": 551.6680592848935,
            "scoreConfidence": [
                27333.653461182173,
                28436.98957975196
            ],
            "scorePercentiles": {
                "0.0": 27441.37451635741,
                "50.0": 27743.264214096213,
                "90.0": 28480.16684407796,
                "95.0": 28489.345775169506,
                "99.0": 28489.345775169506,
                "99.9": 28489.345775169506,
                "99.99": 28489.345775169506,
                "99.999": 28489.345775169506,
                "99.9999": 28489.345775169506,
                "100.0": 28489.345775169506
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    27684.996190919108,
                    27570.155899867666,
                    28055.09999551162,
                    27715.26878776121,
                    27578.687427263452
                ],
                [
                    28149.470507135462,
                    27441.37451635741,
                    27771.259640431217,
                    28489.345775169506,
                    28397.55646425407
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    },
    {
        "jmhVersion": "1.36",
        "benchmark": "io.github.joeljeremy7.java.config.lib.benchmarks.Benchmarks.Avgt.Cfg4j_String",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "jvm": "/usr/lib/jvm/temurin-17-jdk-amd64/bin/java",
        "jvmArgs": [
            "-Xmx2G"
        ],
        "jdkVersion": "17.0.8.1",
        "vmName": "OpenJDK 64-Bit Server VM",
        "vmVersion": "17.0.8.1+1",
        "warmupIterations": 3,
        "warmupTime": "5 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "5 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 29109.31178036494,
            "scoreError": 865.3995290979617,
            "scoreConfidence": [
                28243.91225126698,
                29974.711309462902
            ],
            "scorePercentiles": {
                "0.0": 28507.153130861636,
                "50.0": 29006.690166153374,
                "90.0": 30027.078140782975,
                "95.0": 30048.037890575717,
                "99.0": 30048.037890575717,
                "99.9": 30048.037890575717,
                "99.99": 30048.037890575717,
                "99.999": 30048.037890575717,
                "99.9999": 30048.037890575717,
                "100.0": 30048.037890575717
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    29838.44039264829,
                    29366.784091843325,
                    29514.88317238448,
                    29261.766652817358,
                    30048.037890575717
                ],
                [
                    28568.41934986377,
                    28707.84150259305,
                    28507.153130861636,
                    28751.61367948939,
                    28528.17794057237
                ]
            ]
        },
        "secondaryMetrics": {
            
        }
    }
]
};
