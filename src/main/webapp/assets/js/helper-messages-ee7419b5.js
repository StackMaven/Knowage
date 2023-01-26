const e={abs:"\u6570\u5024\u306E\u7D76\u5BFE\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",acos:"expr \u306E\u9006\u4F59\u5F26 (\u5225\u540D\u30A2\u30FC\u30AF\u4F59\u5F26) \u3092\u3001java.lang.Math.acos \u306B\u3088\u3063\u3066\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u8FD4\u3057\u307E\u3059\u3002",add_months:"num_months\u5F8Cstart_date\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",approx_percentile:"\u6570\u5024\u5217 col \u306E\u304A\u304A\u3088\u305D\u306E\u767E\u5206\u4F4D\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u9806\u5E8F\u4ED8\u3051\u3089\u308C\u305F col \u5024\u306E\u6700\u5C0F\u5024 (\u6700\u5C0F\u304B\u3089\u6700\u5927\u306B\u4E26\u3079\u66FF\u3048\u3089\u308C\u307E\u3059) \u3067\u3001col \u5024\u306E\u5272\u5408\u304C\u305D\u306E\u5024\u3088\u308A\u5C0F\u3055\u304F\u306A\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\u306E\u5024\u306F 0.0 ~ 1.0 \u306E\u7BC4\u56F2\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002accuracy \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC (\u30C7\u30D5\u30A9\u30EB\u30C8: 10000) \u306F\u3001\u30E1\u30E2\u30EA\u3092\u72A0\u7272\u306B\u3057\u3066\u8FD1\u4F3C\u7CBE\u5EA6\u3092\u5236\u5FA1\u3059\u308B\u6B63\u306E\u6570\u5024\u30EA\u30C6\u30E9\u30EB\u3067\u3059\u3002\u7CBE\u5EA6\u306E\u5024\u304C\u9AD8\u3044\u307B\u3069\u7CBE\u5EA6\u304C\u5411\u4E0A\u3057\u30011.0/\u7CBE\u5EA6\u306F\u8FD1\u4F3C\u5024\u306E\u76F8\u5BFE\u8AA4\u5DEE\u3067\u3059\u3002\u30D1\u30FC\u30BB\u30F3\u30C8\u304C\u914D\u5217\u306E\u5834\u5408\u3001\u30D1\u30FC\u30BB\u30F3\u30C8\u914D\u5217\u306E\u5404\u5024\u306F 0.0 \u304B\u3089 1.0 \u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\u914D\u5217\u306E\u5217 col \u306E\u304A\u304A\u3088\u305D\u306E\u767E\u5206\u4F4D\u6570\u914D\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002",asin:"expr \u306E\u9006\u6B63\u5F26 (\u5225\u540D\u30A2\u30FC\u30AF\u6B63\u5F26) \u3092 java.lang.Math.asin \u306B\u3088\u3063\u3066\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u3001expr \u306E\u5186\u5F27\u306E\u7F6A\u3092\u8FD4\u3057\u307E\u3059\u3002",atan:"expr \u306E\u9006\u63A5\u7DDA (\u5225\u540D\u30A2\u30FC\u30AF\u63A5\u7DDA) \u3092\u3001java.lang.Math.atan \u306B\u3088\u3063\u3066\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u8FD4\u3057\u307E\u3059\u3002",avg:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u5E73\u5747\u3092\u8FD4\u3057\u307E\u3059\u3002",casewhen:"expr1 = true \u306E\u5834\u5408\u3001expr2 \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001expr3 = true \u306E\u5834\u5408\u3001expr4 \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F expr5 \u3092\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\uFF1A <br> expr1\u3001expr3 - \u5206\u5C90\u6761\u4EF6\u5F0F\u306F\u3059\u3079\u3066\u30D6\u30FC\u30EB\u578B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 <br> expr2\u3001expr4\u3001expr5 - \u5206\u5C90\u5024\u5F0F\u3068 else \u5024\u5F0F\u306F\u3059\u3079\u3066\u540C\u3058\u578B\u3067\u3042\u308B\u304B\u3001\u5171\u901A\u306E\u578B\u306B\u5F37\u5236\u53EF\u80FD\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",char_length:"\u6587\u5B57\u5217\u30C7\u30FC\u30BF\u306E\u6587\u5B57\u9577\u307E\u305F\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u306E\u30D0\u30A4\u30C8\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002\u30B9\u30C8\u30EA\u30F3\u30B0\u30FB\u30C7\u30FC\u30BF\u306E\u9577\u3055\u306B\u306F\u3001\u672B\u5C3E\u306E\u30B9\u30DA\u30FC\u30B9\u304C\u542B\u307E\u308C\u307E\u3059\u30022 \u9032\u30C7\u30FC\u30BF\u306E\u9577\u3055\u306B\u306F\u30012 \u9032\u30BC\u30ED\u304C\u542B\u307E\u308C\u307E\u3059\u3002",coalesce:"\u6700\u521D\u306E null \u4EE5\u5916\u306E\u5F15\u6570 (\u5B58\u5728\u3059\u308B\u5834\u5408) \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F\u3001\u30CC\u30EB\u3067\u3059\u3002",concat:"col1, col2, ..., colN \u306E\u9023\u7D50\u3092\u8FD4\u3057\u307E\u3059\u3002",cos:"expr \u306E\u4F59\u5F26\u3092\u3001java.lang.Math.cos \u306B\u3088\u3063\u3066\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u8FD4\u3057\u307E\u3059\u3002",current_date:"\u30AF\u30A8\u30EA\u8A55\u4FA1\u306E\u958B\u59CB\u6642\u306E\u73FE\u5728\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",current_timestamp:"\u30AF\u30A8\u30EA\u8A55\u4FA1\u306E\u958B\u59CB\u6642\u306E\u73FE\u5728\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u8FD4\u3057\u307E\u3059\u3002",date_add:"num_days\u5F8C\u306Bstart_date\u3055\u308C\u305F\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",date_sub:"num_days\u524D\u306Bstart_date\u3055\u308C\u305F\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",date_trunc:'\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7 ts \u3092\u5207\u308A\u6368\u3066\u3066\u3001\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u30FB\u30E2\u30C7\u30EB fmt \u3067\u6307\u5B9A\u3055\u308C\u305F\u5358\u4F4D\u306B\u623B\u3057\u307E\u3059\u3002FMT \u306F ["YEAR", "YYYY", "YY", "MON", "MONTH", "MM", "DAY", "DD", "HOUR", "MINUTE", "SECOND", "WEEK", "QUARTER"] \u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002',datediff:"\u958B\u59CB\u65E5\u304B\u3089\u7D42\u4E86\u65E5\u307E\u3067\u306E\u65E5\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002",day:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",dayofmonth:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",dayofweek:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u66DC\u65E5\u3092\u8FD4\u3057\u307E\u3059 (1 = \u65E5\u66DC\u65E5\u30012 = \u6708\u66DC\u65E5\u3001...\u30017 = \u571F\u66DC\u65E5)\u3002",dayofyear:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002",dense_rank:"\u5024\u306E\u30B0\u30EB\u30FC\u30D7\u5185\u306E\u5024\u306E\u30E9\u30F3\u30AF\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002\u7D50\u679C\u306F\u30011 \u306B\u4EE5\u524D\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30E9\u30F3\u30AF\u5024\u3092\u52A0\u3048\u305F\u5024\u306B\u306A\u308A\u307E\u3059\u3002\u95A2\u6570\u30E9\u30F3\u30AF\u3068\u306F\u7570\u306A\u308A\u3001dense_rank\u306F\u30E9\u30F3\u30AF\u4ED8\u3051\u30B7\u30FC\u30B1\u30F3\u30B9\u306B\u30AE\u30E3\u30C3\u30D7\u3092\u751F\u6210\u3057\u307E\u305B\u3093\u3002",element_at:"\u6307\u5B9A\u3055\u308C\u305F (1 \u304B\u3089\u59CB\u307E\u308B) \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u914D\u5217\u306E\u8981\u7D20\u3092\u8FD4\u3057\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u5834\u5408 < 0, accesses elements from the last to the first. Returns NULL if the index exceeds the length of the array.",element_at2:"\u6307\u5B9A\u3055\u308C\u305F\u30AD\u30FC\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002\u30AD\u30FC\u304C\u30DE\u30C3\u30D7\u306B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F NULL \u3092\u8FD4\u3057\u307E\u3059\u3002",exists:"\u8FF0\u8A9E\u304C\u914D\u5217\u5185\u306E 1 \u3064\u4EE5\u4E0A\u306E\u8981\u7D20\u306B\u5BFE\u3057\u3066\u4FDD\u6301\u3055\u308C\u308B\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002",exp:"e \u3092 expr \u306E\u7D2F\u4E57\u306B\u623B\u3057\u307E\u3059\u3002",factorial:"expr \u306E\u968E\u4E57\u3092\u8FD4\u3057\u307E\u3059\u3002expr \u306F [0..20] \u3067\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F\u3001\u30CC\u30EB\u3067\u3059\u3002",floor:"expr \u4EE5\u4E0B\u306E\u6700\u5927\u306E\u6574\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002",format_string:"printf \u30B9\u30BF\u30A4\u30EB\u306E\u66F8\u5F0F\u6587\u5B57\u5217\u304B\u3089\u66F8\u5F0F\u8A2D\u5B9A\u3055\u308C\u305F\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002",hint:"\u30EA\u30B9\u30C8\u3055\u308C\u305F\u95A2\u6570\u306E1\u3064\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u305D\u308C\u306B\u95A2\u3059\u308B\u8A73\u7D30\u60C5\u5831\u3092\u5165\u624B\u3057\u3066\u304F\u3060\u3055\u3044",hour:"\u6587\u5B57\u5217/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u6642\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002",if:"expr1 \u304C true \u3068\u8A55\u4FA1\u3055\u308C\u305F\u5834\u5408\u3001expr2 \u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F expr3 \u3092\u8FD4\u3057\u307E\u3059\u3002",last_day:"\u65E5\u4ED8\u304C\u5C5E\u3059\u308B\u6708\u306E\u6700\u5F8C\u306E\u65E5\u3092\u8FD4\u3057\u307E\u3059\u3002",lcase:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5C0F\u6587\u5B57\u306B\u5909\u66F4\u3057\u305F str \u3092\u8FD4\u3057\u307E\u3059\u3002",left:"\u6587\u5B57\u5217 str \u304B\u3089\u5DE6\u7AEF\u306E len (len \u306F\u6587\u5B57\u5217\u578B\u3067\u3082\u69CB\u3044\u307E\u305B\u3093) \u6587\u5B57\u3092\u8FD4\u3057\u307E\u3059\u3002len \u304C 0 \u4EE5\u4E0B\u306E\u5834\u5408\u3001\u7D50\u679C\u306F\u7A7A\u306E\u6587\u5B57\u5217\u306B\u306A\u308A\u307E\u3059\u3002",length:"\u6587\u5B57\u5217\u30C7\u30FC\u30BF\u306E\u6587\u5B57\u9577\u307E\u305F\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u306E\u30D0\u30A4\u30C8\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002\u30B9\u30C8\u30EA\u30F3\u30B0\u30FB\u30C7\u30FC\u30BF\u306E\u9577\u3055\u306B\u306F\u3001\u672B\u5C3E\u306E\u30B9\u30DA\u30FC\u30B9\u304C\u542B\u307E\u308C\u307E\u3059\u30022 \u9032\u30C7\u30FC\u30BF\u306E\u9577\u3055\u306B\u306F\u30012 \u9032\u30BC\u30ED\u304C\u542B\u307E\u308C\u307E\u3059\u3002",ln:"expr \u306E\u81EA\u7136\u5BFE\u6570 (\u57FA\u5E95 e) \u3092\u8FD4\u3057\u307E\u3059\u3002",locate:"\u4F4D\u7F6E pos \u306E\u5F8C\u306E str \u5185\u306E substr \u306E\u6700\u521D\u306E\u51FA\u73FE\u4F4D\u7F6E\u3092\u8FD4\u3057\u307E\u3059\u3002\u6307\u5B9A\u3055\u308C\u305F pos \u3068\u623B\u308A\u5024\u306F 1 \u304B\u3089\u59CB\u307E\u308A\u307E\u3059\u3002",log:"expr \u306E\u5BFE\u6570\u3092 base \u3067\u8FD4\u3057\u307E\u3059\u3002",lower:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5C0F\u6587\u5B57\u306B\u5909\u66F4\u3057\u305F str \u3092\u8FD4\u3057\u307E\u3059\u3002",lpad:"str \u3092\u5DE6\u306B\u30D1\u30C3\u30C9\u3067\u57CB\u3081\u8FBC\u3093\u3060\u9577\u3055\u306E len \u3092\u8FD4\u3057\u307E\u3059\u3002str \u304C len \u3088\u308A\u9577\u3044\u5834\u5408\u3001\u623B\u308A\u5024\u306F len \u6587\u5B57\u306B\u77ED\u7E2E\u3055\u308C\u307E\u3059\u3002",ltrim1:"str \u304B\u3089\u5148\u982D\u306E\u30B9\u30DA\u30FC\u30B9\u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002",ltrim2:"\u30C8\u30EA\u30E0\u6587\u5B57\u5217\u304B\u3089\u6587\u5B57\u3092\u542B\u3080\u5148\u982D\u306E\u6587\u5B57\u5217\u3092\u524A\u9664\u3057\u307E\u3059\u3002",max:"expr \u306E\u6700\u5927\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",mean:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u5E73\u5747\u3092\u8FD4\u3057\u307E\u3059\u3002",min:"expr \u306E\u6700\u5C0F\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",minute:"\u6587\u5B57\u5217/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5206\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002",mod:"expr1/expr2 \u306E\u5F8C\u306E\u5270\u4F59\u3092\u8FD4\u3057\u307E\u3059\u3002",month:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u6708\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002",months_between:"timestamp1 \u304C timestamp2 \u3088\u308A\u5F8C\u306E\u5834\u5408\u3001\u7D50\u679C\u306F\u6B63\u306E\u5024\u306B\u306A\u308A\u307E\u3059\u3002timestamp1 \u3068 timestamp2 \u304C\u540C\u3058\u65E5\u4ED8\u306B\u3042\u308B\u5834\u5408\u3001\u307E\u305F\u306F\u4E21\u65B9\u304C\u6708\u306E\u6700\u7D42\u65E5\u3067\u3042\u308B\u5834\u5408\u3001\u6642\u523B\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u5DEE\u306F 1 \u304B\u6708\u3042\u305F\u308A 31 \u65E5\u306B\u57FA\u3065\u3044\u3066\u8A08\u7B97\u3055\u308C\u3001roundOff=false \u3067\u306A\u3044\u9650\u308A 8 \u6841\u306B\u4E38\u3081\u3089\u308C\u307E\u3059\u3002",next_day:"start_date \u3088\u308A\u5F8C\u306E\u6700\u521D\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u3001\u793A\u3055\u308C\u3066\u3044\u308B\u540D\u524D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002",not:"\u8AD6\u7406\u7684\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",nullif:"expr1 \u304C expr2 \u3068\u7B49\u3057\u3044\u5834\u5408\u306F null \u3092\u8FD4\u3057\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F expr1 \u3092\u8FD4\u3057\u307E\u3059\u3002",nvl:"expr1 \u304C\u30CC\u30EB\u306E\u5834\u5408\u306F expr2 \u3092\u8FD4\u3057\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F expr1 \u3092\u8FD4\u3057\u307E\u3059\u3002",percent_rank:"\u5024\u306E\u30B0\u30EB\u30FC\u30D7\u5185\u306E\u5024\u306E\u30E9\u30F3\u30AF\u4ED8\u3051\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002",percentile1:"\u6570\u5024\u5217 col \u306E\u6B63\u78BA\u306A\u767E\u5206\u4F4D\u6570\u5024\u3092\u6307\u5B9A\u3055\u308C\u305F\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\u3067\u8FD4\u3057\u307E\u3059\u3002\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\u306E\u5024\u306F 0.0 ~ 1.0 \u306E\u7BC4\u56F2\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u5468\u6CE2\u6570\u306E\u5024\u306F\u6B63\u306E\u7A4D\u5206\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093",percentile2:"\u6570\u5024\u5217 col \u306E\u6B63\u78BA\u306A\u767E\u5206\u4F4D\u6570\u5024\u914D\u5217\u3092\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\u3067\u8FD4\u3057\u307E\u3059\u3002\u30D1\u30FC\u30BB\u30F3\u30C8\u914D\u5217\u306E\u5404\u5024\u306F\u30010.0 ~ 1.0 \u306E\u7BC4\u56F2\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u5468\u6CE2\u6570\u306E\u5024\u306F\u6B63\u306E\u7A4D\u5206\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093",pow:"expr1 \u3092 expr2 \u306E\u7D2F\u4E57\u306B\u4E0A\u3052\u307E\u3059\u3002",quarter:"\u65E5\u4ED8\u306E\u56DB\u534A\u671F\u3092 1 ~ 4 \u306E\u7BC4\u56F2\u3067\u8FD4\u3057\u307E\u3059\u3002",replace:"\u691C\u7D22\u306E\u3059\u3079\u3066\u306E\u51FA\u73FE\u7B87\u6240\u3092 replace \u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002",round:"HALF_UP \u4E38\u3081\u30E2\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5C0F\u6570\u70B9\u4EE5\u4E0B d \u6841\u306B\u4E38\u3081\u3089\u308C\u305F expr \u3092\u8FD4\u3057\u307E\u3059\u3002",rtrim1:"str \u304B\u3089\u672B\u5C3E\u306E\u30B9\u30DA\u30FC\u30B9\u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002",rtrim2:"str \u306E\u30C8\u30EA\u30E0\u6587\u5B57\u5217\u306E\u6587\u5B57\u3092\u542B\u3080\u672B\u5C3E\u306E\u6587\u5B57\u5217\u3092\u524A\u9664\u3057\u307E\u3059\u3002",second:"\u6587\u5B57\u5217/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E 2 \u756A\u76EE\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002",sha:"expr \u306E 16 \u9032\u6587\u5B57\u5217\u3068\u3057\u3066 sha1 \u30CF\u30C3\u30B7\u30E5\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",sin:"expr \u306E\u6B63\u5F26\u3092\u3001java.lang.Math.sin \u306B\u3088\u3063\u3066\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u8FD4\u3057\u307E\u3059\u3002",skewness:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u6B6A\u5EA6\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",stddev:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u6A19\u6E96\u504F\u5DEE\u3092\u8FD4\u3057\u307E\u3059\u3002",stddev_pop:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u6BCD\u6A19\u6E96\u504F\u5DEE\u3092\u8FD4\u3057\u307E\u3059\u3002",stddev_samp:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u6A19\u6E96\u504F\u5DEE\u3092\u8FD4\u3057\u307E\u3059\u3002",substr:"pos \u3067\u59CB\u307E\u308A\u9577\u3055 len \u306E str \u306E\u90E8\u5206\u6587\u5B57\u5217\u3001\u307E\u305F\u306F pos \u3067\u59CB\u307E\u308A\u9577\u3055 len \u306E\u30D0\u30A4\u30C8\u914D\u5217\u306E\u30B9\u30E9\u30A4\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002",tan:"expr \u306E\u6B63\u63A5\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001java.lang.Math.tan \u3067\u8A08\u7B97\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u8FD4\u3057\u307E\u3059\u3002",timestamp:"\u5024 expr \u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u30FB\u30C7\u30FC\u30BF\u30FB\u30BF\u30A4\u30D7\u306E\u30BF\u30A4\u30E0\u30FB\u30B9\u30BF\u30F3\u30D7\u306B\u30AD\u30E3\u30B9\u30C8\u3057\u307E\u3059\u3002",to_date:"fmt \u5F0F\u3092\u6301\u3064date_str\u5F0F\u3092\u65E5\u4ED8\u307E\u3067\u89E3\u6790\u3057\u307E\u3059\u3002\u7121\u52B9\u306A\u5165\u529B\u3067 null \u3092\u8FD4\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001fmt \u304C\u7701\u7565\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u65E5\u4ED8\u307E\u3067\u306E\u30AD\u30E3\u30B9\u30C8\u898F\u5247\u306B\u5F93\u3044\u307E\u3059\u3002",to_timestamp:"fmt \u5F0F\u3092\u6301\u3064timestamp_str\u5F0F\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u89E3\u6790\u3057\u307E\u3059\u3002\u7121\u52B9\u306A\u5165\u529B\u3067 null \u3092\u8FD4\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001fmt \u304C\u7701\u7565\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3078\u306E\u30AD\u30E3\u30B9\u30C8\u898F\u5247\u306B\u5F93\u3044\u307E\u3059\u3002",trim:"trim(str) - str \u306E\u5148\u982D\u3068\u672B\u5C3E\u306E\u30B9\u30DA\u30FC\u30B9\u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002 <br>        trim(BOTH trimStr FROM str) - str \u306E\u5148\u982D\u3068\u672B\u5C3E\u306E trimStr \u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002 <br>        trim(LEADING trimStr FROM str) - str \u304B\u3089\u5148\u982D\u306E trimStr \u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002 <br>        trim(TRAILING trimStr FROM str) - str \u304B\u3089\u672B\u5C3E\u306E trimStr \u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002 <br>        \u5F15\u6570\uFF1A <br>        str - \u6587\u5B57\u5217\u5F0F <br>        trimStr - \u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u6587\u5B57\u5217\u6587\u5B57\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F\u5358\u4E00\u306E\u30B9\u30DA\u30FC\u30B9\u3067\u3059\u3002 <br>        BOTH, FROM - \u6587\u5B57\u5217\u306E\u4E21\u7AEF\u304B\u3089\u6587\u5B57\u5217\u6587\u5B57\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u3053\u3068\u3092\u6307\u5B9A\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u3059\u3002 <br>        LEADING\u3001FROM - \u3053\u308C\u3089\u306F\u3001\u6587\u5B57\u5217\u306E\u5DE6\u7AEF\u304B\u3089\u6587\u5B57\u5217\u6587\u5B57\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u3053\u3068\u3092\u6307\u5B9A\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u3059\u3002 <br>        TRAILING, FROM - \u6587\u5B57\u5217\u306E\u53F3\u7AEF\u304B\u3089\u6587\u5B57\u5217\u6587\u5B57\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u3053\u3068\u3092\u6307\u5B9A\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u3059\u3002",ucase:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u5909\u66F4\u3057\u305F str \u3092\u8FD4\u3057\u307E\u3059\u3002",upper:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u5909\u66F4\u3057\u305F str \u3092\u8FD4\u3057\u307E\u3059\u3002",variance:"\u30B0\u30EB\u30FC\u30D7\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u5206\u6563\u3092\u8FD4\u3057\u307E\u3059\u3002",weekday:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u66DC\u65E5\u3092\u8FD4\u3057\u307E\u3059 (0 = \u6708\u66DC\u65E5\u30011 = \u706B\u66DC\u65E5\u3001...\u30016 = \u65E5\u66DC\u65E5)\u3002",weekofyear:"\u6307\u5B9A\u3055\u308C\u305F\u65E5\u4ED8\u306E\u5E74\u306E\u9031\u3092\u8FD4\u3057\u307E\u3059\u30021 \u9031\u9593\u306F\u6708\u66DC\u65E5\u306B\u958B\u59CB\u3059\u308B\u3068\u898B\u306A\u3055\u308C\u3001\u7B2C 1 \u9031\u306F >3 \u65E5\u306E\u6700\u521D\u306E\u9031\u3067\u3059\u3002",year:"\u65E5\u4ED8/\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5E74\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"};var t={dataPreparation:e};export{e as dataPreparation,t as default};
//# sourceMappingURL=helper-messages-ee7419b5.js.map
