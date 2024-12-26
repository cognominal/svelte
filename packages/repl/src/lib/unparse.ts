import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import type { CompileResult } from 'svelte/compiler';
type Ast = CompileResult['ast'];


export function unparse(view: EditorView, ast: Ast) {
    const transaction = view.state.update({
        changes: {
          from: view.state.doc.length,
          insert: "\n\nconsole.log('Hello again, world!')"
        }
      })
      view.dispatch(transaction)
}