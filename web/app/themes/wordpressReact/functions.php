<?php
add_action('after_setup_theme', function () {
  add_theme_support('editor-styles');
  add_editor_style('build/index.ts.css');
});

add_action('wp_enqueue_scripts', function () {
  $path = get_theme_file_path('build/index.ts.css');

  if (file_exists($path)) {
    wp_enqueue_style(
      'wordpress-react-theme',
      get_theme_file_uri('build/index.ts.css'),
      [],
      filemtime($path)
    );
  }
});

// Editor-script (som nå også importerer hero-blokken)
add_action('enqueue_block_editor_assets', function () {
  $asset_path = get_theme_file_path('build/index.ts.asset.php');
  if (! file_exists($asset_path)) {
    return;
  }

  $asset = require $asset_path;

  wp_enqueue_script(
    'wordpress-react-blocks',
    get_theme_file_uri('build/index.ts.js'),
    $asset['dependencies'] ?? [],
    $asset['version'] ?? false,
    true
  );
});

// 🔹 Registrer hero-blokken via block.json + render.php (kildekatalogen)
add_action('init', function () {
  register_block_type(__DIR__ . '/src/blocks/hero');
});