#!/bin/sh

NON_FLOW_FILES=""

for file in $(git ls-files | grep -E '\.jsx?$' | grep -vE '^flow-typed'); do
  if [ "$(grep -cE '(//|\*)[[:space:]]+@flow' "$file")" -lt 1 ]; then
    NON_FLOW_FILES="$NON_FLOW_FILES\\n  $file"
  fi
done

if [ "$NON_FLOW_FILES" ]; then
  printf "Files without @flow flag:\\n"
  echo "$NON_FLOW_FILES"
fi
