import Link from "next/link";
import { ArrowLeft, CircuitBoard, TerminalSquare, Workflow, Code2 } from "lucide-react";

export default function CompilerProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-10 text-slate-200 sm:px-6 lg:px-8 lg:pt-16">
        {/* Back link */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100 shadow shadow-black/40 transition hover:border-emerald-400/70 hover:text-emerald-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.22em] text-emerald-200 shadow shadow-black/60 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
            CPL · Compiler Pipeline
          </div>
        </div>

        {/* Hero */}
        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.22em] text-emerald-200 shadow shadow-black/60 sm:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
            CPL · Compiler Pipeline
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Custom Language Compiler (CPL)
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            A full compiler for a custom language called <span className="text-emerald-300">CPL</span>,
            implemented from scratch in C using <span className="text-emerald-300">Flex</span> and{" "}
            <span className="text-emerald-300">Bison</span>. The project covers lexical analysis, syntax
            analysis and semantic checks, with robust error handling across the pipeline.
          </p>

          <div className="flex flex-wrap gap-2 text-[0.7rem]">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/50 bg-slate-900/80 px-3 py-1 text-emerald-200 shadow shadow-black/40">
              <TerminalSquare className="h-3 w-3" />
              C · Flex · Bison · GCC
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-slate-200 shadow shadow-black/40">
              <CircuitBoard className="h-3 w-3" />
              Low-level language engineering
            </span>
          </div>
        </header>

        {/* Pipeline overview / flow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Workflow className="h-4 w-4 text-emerald-300" />
            <h2>Compilation Pipeline</h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-300">
            The CPL compiler is structured as a classic multi‑stage pipeline. Each stage takes
            the previous output, enriches it with more structure and checks, and passes it along.
          </p>

          <div className="card bg-slate-950/80">
            <pre className="whitespace-pre-wrap text-[0.75rem] leading-relaxed text-emerald-200/90">
{`[ Source.cpl ]
        │
        ▼
Lexical Analysis (Flex - scanner.l)
  - Reads characters
  - Produces tokens (IDENT, INT, REAL, IF, WHILE, PLUS, ASSIGN, ...)
        │
        ▼
Syntax Analysis (Bison - parser.y)
  - Consumes tokens with a CFG
  - Builds parse tree / AST
  - Detects syntax errors with context
        │
        ▼
Semantic Checks
  - Symbol table (scopes, types)
  - Type checking and usage rules
        │
        ▼
[ (Optional) Intermediate Representation / Code Generation ]`}
            </pre>
          </div>
        </section>

        {/* Lexical Analyzer snippet */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Code2 className="h-4 w-4 text-emerald-300" />
            <h2>Lexical Analysis · Flex (scanner.l)</h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-300">
            The lexical analyzer is implemented in <span className="text-emerald-300">scanner.l</span> using
            Flex. It tokenizes the raw source into keywords, identifiers, literals and operators while
            filtering whitespace and comments.
          </p>

          <div className="card bg-slate-950/90">
            <p className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-400">
              Example from <span className="text-emerald-300">scanner.l</span>
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/80 p-3">
              <pre className="whitespace-pre text-[0.75rem] leading-relaxed text-emerald-100">
{`%{
#include "parser.tab.h"
%}

%%
"int"        { return T_INT; }
"real"       { return T_REAL; }
"string"     { return T_STRING; }
"if"         { return T_IF; }
"then"       { return T_THEN; }
"else"       { return T_ELSE; }
"while"      { return T_WHILE; }
"switch"     { return T_SWITCH; }
"case"       { return T_CASE; }

[a-zA-Z_][a-zA-Z0-9_]*  { yylval.id = strdup(yytext); return T_ID; }
[0-9]+                  { yylval.ival = atoi(yytext); return T_INT_LIT; }
[0-9]+"."[0-9]+         { yylval.rval = atof(yytext); return T_REAL_LIT; }

"=="        { return T_EQ; }
"="         { return T_ASSIGN; }
"+"         { return T_PLUS; }
"-"         { return T_MINUS; }
"*"         { return T_MUL; }
"/"         { return T_DIV; }

[ \\t\\r\\n]+           { /* skip whitespace */ }
"//".*                  { /* skip line comment */ }
.                      { fprintf(stderr, "Lexical error: unexpected '%s'\\n", yytext); }
%%`}
              </pre>
            </div>
          </div>
        </section>

        {/* Syntax Analyzer snippet */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Code2 className="h-4 w-4 text-emerald-300" />
            <h2>Syntax Analysis · Bison (parser.y)</h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-300">
            The syntax analyzer, implemented in <span className="text-emerald-300">parser.y</span> using
            Bison, defines a context‑free grammar for CPL. It validates program structure, builds
            higher‑level constructs and integrates early semantic checks such as scope and type rules.
          </p>

          <div className="card bg-slate-950/90">
            <p className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-400">
              Example from <span className="text-emerald-300">parser.y</span>
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/80 p-3">
              <pre className="whitespace-pre text-[0.75rem] leading-relaxed text-emerald-100">
{`%union {
  int    ival;
  double rval;
  char*  id;
}

%token T_INT T_REAL T_STRING
%token T_IF T_THEN T_ELSE T_WHILE T_SWITCH T_CASE
%token T_ID T_INT_LIT T_REAL_LIT
%token T_ASSIGN T_PLUS T_MINUS T_MUL T_DIV T_EQ

%%
program
  : decl_list stmt_list
  ;

decl_list
  : decl_list decl
  | /* empty */
  ;

decl
  : T_INT    T_ID ';'
  | T_REAL   T_ID ';'
  | T_STRING T_ID ';'
  ;

stmt
  : if_stmt
  | while_stmt
  | assign_stmt
  ;

if_stmt
  : T_IF '(' expr ')' T_THEN stmt_list T_ELSE stmt_list
  ;

while_stmt
  : T_WHILE '(' expr ')' stmt_list
  ;

assign_stmt
  : T_ID T_ASSIGN expr ';'
  ;
%%`}
              </pre>
            </div>
          </div>
        </section>

        {/* Error handling & semantic checks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <TerminalSquare className="h-4 w-4 text-emerald-300" />
            <h2>Error Handling & Semantic Checks</h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-300">
            The compiler reports both lexical and syntax errors with line context, and performs
            semantic checks on top of the parsed structure. A symbol table tracks identifiers across
            nested scopes so that redeclarations, undefined variables and basic type mismatches can
            be detected early.
          </p>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>· Lexical errors for invalid characters or unterminated tokens.</li>
            <li>· Syntax errors with meaningful messages from Bison&apos;s error productions.</li>
            <li>· Semantic checks for variable declarations, scope rules and control‑flow constructs.</li>
          </ul>
        </section>

        {/* Summary */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">Summary</h2>
          <p className="max-w-3xl text-sm text-slate-300">
            The CPL compiler demonstrates end‑to‑end ownership of a low‑level language toolchain:
            from designing the language grammar and implementing the scanner and parser, to wiring
            error handling and semantic analysis in C. It showcases practical experience with{" "}
            <span className="text-emerald-300">Flex</span>, <span className="text-emerald-300">Bison</span>{" "}
            and the classic compiler pipeline.
          </p>
        </section>

        {/* Back link bottom */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-100 shadow shadow-black/40 transition hover:border-emerald-400/70 hover:text-emerald-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

