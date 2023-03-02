import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbidden = state.opts.props || [];
        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;
            if (forbidden.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
      /*      Identifier(path) {
        const { name } = path.node;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split('')
          .reverse()
          .join('');
      }, */
    },
  };
}
