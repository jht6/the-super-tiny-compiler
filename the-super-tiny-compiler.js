'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 
 * 今天我们将一起编写一个编译器。这是一个极小的编译器！这个编译器非常小巧，如果你把这个文件
 * 内的所有注释都删掉，你就会发现所有的代码也就大约200行左右。
 * 
 * 我们将会把一些lisp风格的函数调用编译为C语言风格的函数调用。
 *
 * 如果你对它们不是很熟悉，我会给你作个简单地介绍。
 *
 * 如果我们有 `add` 和 `substract` 两个函数，在代码中它们应这样编写：
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 这很简单，对吧?
 *
 * 很好，这就是我们即将要编译的东西。虽然这不是完整的LISP或C语言的语法，但这些语法已经足够展示
 * 很多现代编译器的主要机制了。
 */

/**
 * 大多数编译器可以分为三个主要阶段：代码分析（Parsing），代码转换（Transformation），代码生成（Code Generation）。
 *
 * 1. *代码分析* 将源代码转换成一种更抽象的代码表示形式（以下将其称为**抽象中间代码**）。
 *
 * 2. *代码转换* 接受这种**抽象中间代码**并操纵它，以完成编译器想让它做的任何事情。
 *
 * 3. *代码生成* 接受经过转换的**抽象中间代码**并将它转换成新代码。
 */

/**
 * 代码分析（Parsing）
 * -------
 *
 * 代码分析通常分为两个阶段：词法分析 和 语法分析。
 *
 * 1. *词法分析* 接受源代码，并通过分词器（tokenizer）或词法分析器（lexer）将源代码分解为单词符号（token，不太好翻译，下文还是直接叫token吧）。
 *
 *    token是一系列很小的对象，每个token描述了语法的一个独立部分。它们可以是数字，标签，标点符号，
 *    操作符，或其他任意内容。
 *
 * 2. *语法分析* 接受一系列token，并将它们重新格式化为另一种表示形式，该表示形式描述语法的
 *    每个部分及其相互之间的关系。这就是所谓的“中间形式”（也就是上文提到的**抽象中间代码**）或抽象语法树。
 *
 *    一个抽象语法树（简称为AST）是一个深层嵌套的对象，它表示代码的方式既容易处理，又可以向
 *    我们传达很多信息。
 *
 * 对于下面的语法：
 *
 *   (add 2 (subtract 4 2))
 *
 * 它的token可能看起来是这个样子：
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 而它的抽象语法树(AST)可能是这样：
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 代码转换
 * --------------
 *
 * 编译器的下一个过程是代码转换（transformation）。它接受并修改上个步骤中产生的AST。它可以用同一种
 * 语言操纵AST，也可以将AST翻译为一种全新的语言。
 *
 * 来看一下我们将如何转换AST。
 *
 * 你可能已经注意到AST中的元素看起来非常相似。这些对象具有type属性。每个节点被称为一个AST节点。
 * 这些节点定义了一些属性，用于描述节点树的一个独立部分。
 *
 * 我们可以用一个节点来表示一个数字字面量（NumberLiteral）：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者用一个节点表示一个调用表达式（CallExpression）：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 转换AST时，我们可以增加、删除、替换节点的属性，可以增加、删除节点，也可以基于现有的AST
 * 创建一个全新的AST。
 *
 * 由于我们的目标是一种新语言，所以我们将重点关注如何创建一个特定于目标语言的全新AST。
 *
 * 遍历（Traversal）
 * ---------
 *
 * 为了浏览所有节点，我们需要遍历它们。这个遍历程序会深度优先遍历AST上的所有节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 对于上面的AST，遍历过程为：
 *
 *   1. Program - 从AST的最顶层开始
 *   2. CallExpression (add) - 移至Program的body的第一个元素
 *   3. NumberLiteral (2) - 移至CallExpression的params的第一个元素
 *   4. CallExpression (subtract) - 移至CallExpression的params的第二个元素
 *   5. NumberLiteral (4) - 移至CallExpression的params的第一个元素
 *   6. NumberLiteral (2) - 移至CallExpression的params的第二个元素
 *
 * 如果我们要直接修改这个AST而不是创建一个新的，那么我们可能要在此引入各种各样的抽象。
 * 但是对于我们当前的目标来说，能访问（visiting）到AST的每个节点就已经足够了。
 *
 * 之所以使用“访问（visiting）”这个词，是因为有这样一种模式表示对象结构的元素上的操作。
 *
 * Visitors
 * --------
 *
 * 这里的基本思想是要创建一个“visitor”对象，该对象具有接收不同节点类型的方法。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 在遍历AST时，无论何时“进入（enter）”了匹配类型的节点，我们都将调用visitor上的方法。
 *
 * 为了使其有用，我们还将传入节点和对父节点的引用。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 然而，也存在当“退出（exit）”节点时调用方法的可能性。以列表的形式想象一下之前的树结构：
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们向深层遍历时，我们总会到达分支的尽头。当我们完成树的每个分支时，我们就要“退出（exit）”它。
 * 因此，沿着树向下我们“进入（enter）”每个节点，然后向上我们“退出（exit）”节点。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持上述功能，visitor的最终形式看起来是这样的：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成（Code Generation）
 * ---------------
 *
 * 编译器的最后一个阶段是代码生成。有时编译器会在此阶段做一些与代码转换阶段中相重叠的事情，
 * 但大多数情况下“代码生成”是指接受AST并输出新代码。
 *
 * 代码生成器有多种不同的工作方式，有的编译器会重用之前的token，有的会创建一个单独的
 * 代码表示形式以便能够线性地打印节点，但据我所知，大部分编译器会使用我们刚刚创建的AST，
 * 这也是我们接下来要关注的方式。
 *
 * 实际上，代码生成器知道如何“打印（print）” AST中不同类型的节点，并且会递归地调用自身来
 * 打印嵌套的节点，直到所有内容都被输出到一个很长的代码字符串中。
 */

/**
 * 以上就是一个编译器的所有部分了！
 *
 * 当然也并不是说所有的编译器都完全像我描述的这样。编译器有多种不同的用途，除了上面提到的几个
 * 步骤之外，它们可能需要更多的步骤以完成特定功能。
 *
 * 但是现在你对于大多数编译器是什么样子应该已经有了一个大致的的认识。
 *
 * 既然我已经介绍完了，你也准备好编写你自己的编译器了，对吗？
 *
 * 哈哈，开个玩笑，接下来我会帮助你编写一个编译器。
 *
 * 所以， 我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 我们从代码分析（parsing）的第一个阶段开始：使用分词器（tokenizer）进行词法分析（lexical analysis）。
 *
 * 我们会接受代码的字符串，然后将其拆分到由多个token组成的数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们从接受一个代码的字符串开始，并且将要设置两个东西...
function tokenizer(input) {

  // `current` 变量用于跟踪当前我们在代码中的位置，就像一个指针。
  let current = 0;

  // `tokens` 数组用于保存token
  let tokens = [];

  // 创建一个 `while` 循环，在循环里面我们会设置`current`，让它根据我们的需要进行递增
  //
  // 这样做的原因是tokens可能有任意长度，我们需要在循环中让 `current` 变量递增多次
  while (current < input.length) {

    // 保存`input`中`current`位置的字符
    let char = input[current];

    // 首先要检查的是左括号。它稍后会用于`CallExpression`，但现在我们只关心左括号字符即可。
    //
    // 判断当前是否为左括号
    if (char === '(') {

      // 如果是左括号，就向`tokens`中推入一个新token，类型为`paren`，值为“左括号”。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 递增`current`
      current++;

      // 使用 `continue` 结束本次循环，直接跳入下次循环
      continue;
    }

    // 检查右括号。处理过程与前面一样：如果是右括号，就推入一个新token,
    // 递增`current`, 然后使用 `continue` 结束本次循环，直接跳入下次循环
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 接下来要检查空格符。有趣的是，空格符的存在时为了分割字符，但它实际上并不需要
    // 作为token保存。后面我们将直接把它扔掉。
    //
    // 因此这里我们只需判断是否为空格符，如果是，就使用 `continue` 结束本次循环，直接跳入下次循环
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 接下来的这种token是数字类型。它和我们刚刚看到的东西不同，因为一个数字可能含任意
    // 数量的字符，并且我们要捕捉整个字符序列作为一个token。
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //
    // 所以当我们遇到序列中第一个数字时，就开始处理它。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 创建一个`value`字符串，后续我们会在`value`上面添加字符。
      let value = '';

      // 遍历序列中每个字符，如果当前字符是数字，就将它追加到 `value`， 并递增`current`，
      // 直到遇到一个不是数字的字符时停止。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 将这个数字类型的token推入 `tokens` 数组
      tokens.push({ type: 'number', value });

      // 结束本次循环，跳入下次循环
      continue;
    }

    // 我们也支持字符串，它们由双引号包裹的任意文本
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 首先，我们检查一个左侧的双引号：
    if (char === '"') {
      // 使用 `value` 变量来构建字符串token
      let value = '';

      // 跳过左侧的双引号，不把它加入到token中
      char = input[++current];

      // 遍历并保存每个字符，直到遇到另一个双引号为止。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 递增`current`指针，让它跳过右侧的双引号
      char = input[++current];

      // 将这个字符串token推入`tokens`数组
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一种token类型是名称token。它是一个字母序列，是list语法中的函数名称
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 遍历字母并将其追加到 `value` 中
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 将这个名称token推入 `tokens` 数组
      tokens.push({ type: 'name', value });

      continue;
    }

    // 如果到这里还没匹配到任何字符，就抛出一个异常然后退出程序。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 最后，我们只需返回 `tokens` 数组即可。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * parser接受一个含token的数组，然后将其转换为AST。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 定义 `parser` 函数，它接受一个 `tokens` 数组。
function parser(tokens) {

  // 使用 `current` 作为一个指针。
  let current = 0;

  // 这次要使用递归，而不是 `while` 循环。因此我们要定义一个 `walk` 函数。
  function walk() {

    // 首先获取 `current` 指向的token。
    let token = tokens[current];

    // 把每种token拆分为不同的代码路径（code path），从 `number` 类型的token开始。
    //
    // 判断当前是否为 `number` token
    if (token.type === 'number') {

      // 如果是， 则递增 `current`
      current++;

      // 返回一个新的 `NumberLiteral` 类型的AST节点，且将其值设为token的value值。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果是字符串token，就返回一个 `StringLiteral` 节点。处理过程和 `number` 类型一样。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来寻找CallExpressions，当我们遇到一个左括号时就开始处理。
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // 递增 `current` 变量，直接跳过左括号，因为在AST中我们并不关注它。
      token = tokens[++current];

      // 创建一个节点，类型为 `CallExpression`，并将其name设为token的value，因为左括号
      // 后面的下一个token就是函数名。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 递增 `current` 指针，跳过刚刚的名称token。
      token = tokens[++current];

      // 现在我们要遍历后面的每个token，将它们作为 `CallExpression` 的参数（param），
      // 一直到遇到右括号停止遍历。
      //
      // 我们将利用 `递归` 解决问题，而不是试图解析一组可能无限嵌套的节点。
      //
      // 为了解释这一点，来看一下我们的Lisp代码。你会发现 `add` 的参数是一个数字和一个
      // 嵌套的 `CallExpression`， 这个 `CallExpression` 包含它自己的数字参数。
      //
      //   (add 2 (subtract 4 2))
      //
      // 你也会发现在tokens数组中会有多个右括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 我们将通过嵌套的 `walk` 函数来递增 `current` 指针，让这个指针移动到
      // 所有嵌套的 `CallExpression` 之后。

      // 创建一个 `while` 循环，直到遇到一个token是右括号时停止循环。
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 调用 `walk` 函数，并将它返回的节点推入 `node.params`。
        node.params.push(walk());
        token = tokens[current];
      }

      // 递增 `current` 指针，跳过右括号。
      current++;

      // 返回节点
      return node;
    }

    // 如果无法识别token的节点类型，就抛出错误。
    throw new TypeError(token.type);
  }

  // 创建AST，它的根节点是 `Program`。
  let ast = {
    type: 'Program',
    body: [],
  };

  // 调用 `walk` 函数，将返回的节点推入 `ast.body` 数组。
  //
  // 之所以要在循环中处理，是因为程序中除了嵌套 `CallExpression`，也可以
  // 一个接一个地使用 `CallExpression`。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 返回AST。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 现在我们已经有AST了，我们希望能够使用visitor访问不同的节点。我们需要在遇到类型匹配
 * 的节点时调用visitor上的方法。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 定义 `traverser` 函数，它接受一个AST和一个visitor作为参数。在函数内我们
// 将定义两个函数...
function traverser(ast, visitor) {

  // `traverseArray` 函数可以遍历一个数组并且调用下面的 `traverseNode` 函数。
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` 函数接受 `node` 和 `node`的父节点 `parent` 作为参数。因此可以
  // 把这两个参数传入visitor的方法。
  function traverseNode(node, parent) {

    // 首先判断传入的node类型在visitor中是否存在对应的方法。
    let methods = visitor[node.type];

    // 如果存在 `enter` 方法，则调用它，并以 `node` 和 `parent` 作为参数。
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 接下来按照当前节点的类型分别进行处理。
    switch (node.type) {

      // 从顶层的 `Program` 节点开始处理。由于 `Program` 节点有个叫 `body` 的属性，
      // 它是一个由节点组成的数组，因此我们调用 `traverseArray` 来遍历里面的节点。
      //
      // （记住，`traverseArray` 会依次为每个节点调用 `traverseNode`，因此会使节点树
      // 被递归地遍历）
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 对于 `CallExpression` 则遍历它的 `params`。
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // `NumberLiteral` 和 `StringLiteral` 类型的节点没有子节点需要访问，直接break即可。
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 如果未识别出节点类型，就抛出错误。
      default:
        throw new TypeError(node.type);
    }

    // 如果存在 `exit` 方法，则调用它，并以 `node` 和 `parent` 作为参数。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后我们通过调用 `traverseNode` 函数启动traverser，传入AST作为参数，但是 `parent`
  // 为空值，因为最顶层的AST没有父节点。
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 接下来是transformer，它接受AST作为参数，并将AST和一个visitor传入traverser，然后
 * 生成一个新的AST。
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 我们的transformer函数要接受lisp代码的AST。
function transformer(ast) {

  // 创建一个新的AST `newAst`，它和之前的AST一样，也包含一个 program 节点。
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 接下来我们要稍微作弊一下。我们在父节点上添加一个 `context` 属性，
  // 并且向 `context` 中添加节点。通常你应该有一个比这更好的抽象，但对于我们当前的目标
  // 来说，这样处理会更简单。
  //
  // 注意，context 是在旧AST上对新AST的一个引用。
  ast._context = newAst.body;

  // 调用traverser函数，并传入AST和visitor。
  traverser(ast, {

    // 第一个visitor方法用于处理任意的`NumberLiteral`
    NumberLiteral: {
      // 使用enter方法访问它们
      enter(node, parent) {
        // 创建一个新的 `NumberLiteral` 节点，并将其加入context。
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 处理 `StringLiteral`。
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 处理 `CallExpression`。
    CallExpression: {
      enter(node, parent) {

        // 首先创建一个新的 `CallExpression` 节点，它含有一个嵌套的 `Identifier` 节点。
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // 在原来的 `CallExpression` 节点上创建一个新的context来引用 `expression` 的
        // arguments，这样就能向里面添加参数了。
        node._context = expression.arguments;

        // 判断父节点是否为 `CallExpression`。
        // 如果不是的话...
        if (parent.type !== 'CallExpression') {

          // 用 `ExpressionStatement` 节点包裹 `CallExpression`。这么做的原因是
          // 在JavaScript中，顶层 `CallExpression` 实际上是声明。
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最后，把（可能被包裹了的）`CallExpression` 添加到 `parent` 的 `context`。
        parent._context.push(expression);
      },
    }
  });

  // 返回新AST。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * 现在来到最后的阶段：代码生成器
 *
 * 代码生成器递归地调用自身，将AST上的每个节点输出到一个很长的字符串（即最终生成的代码）中。
 */

function codeGenerator(node) {

  // 根据 `node' 的 `type` 的不同，分别进行处理
  switch (node.type) {

    // 如果是 `Program` 节点，则使用 ·codeGenerator· 遍历 `body` 中的每个节点，并对
    // 得到的数组以换行符未参数进行 `join` 操作。
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // 对于 `ExpressionStatement` 节点，则用 `codeGenerator` 处理 `node.expresson`，
    // 并添加一个分号。
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...因为我们喜欢用 *正确的* 方式编码)
      );

    // 对于 `CallExpression`，则输出它的 `callee`，添加一个左括号，用 `codeGenerator`
    // 遍历处理 `arguments` 数组并以逗号为参数进行 `join` 操作，最后再加个右括号。
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // 对于 `Identifier` 节点，直接返回 `node.name`。
    case 'Identifier':
      return node.name;

    // 对于 `NumberLiteral` 节点，直接返回 `node.value`。
    case 'NumberLiteral':
      return node.value;

    // 对于 `StringLiteral` 节点，在 `node.value` 的两侧添加双引号。
    case 'StringLiteral':
      return '"' + node.value + '"';

    // 如果未识别节点类型，则抛出错误。
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * 最后一步！创建 `compiler` 函数。只需将下面示意的管道连起来即可。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 返回结果即可。
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 导出各函数...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
