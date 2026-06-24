// @flow
import {fieldRegistry} from 'sulu-admin-bundle/containers';
import {Input} from 'sulu-admin-bundle/containers/Form';

// "config_line" is a plain single-line text input used by the shared block
// fragments (attr_class, attr_id) for non-translatable configuration values.
// Registering it here makes the block library self-contained — it no longer
// depends on robole/sulu-ai-translator-bundle to provide this field type.
// If that bundle is also installed it registers the same component, so there
// is no conflict.
fieldRegistry.add('config_line', Input);
