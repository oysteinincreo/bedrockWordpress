<?php
$title    = $attributes['title'] ?? '';
$text     = $attributes['text'] ?? '';
$imageUrl = $attributes['imageUrl'] ?? '';
$imageAlt = $attributes['imageAlt'] ?? '';
?>

<section class="p-16 bg-gray-100">
  <?php if ($imageUrl) : ?>
    <div class="mb-4">
      <img
        src="<?php echo esc_url($imageUrl); ?>"
        alt="<?php echo esc_attr($imageAlt); ?>"
        class="w-full h-auto"
      />
    </div>
  <?php endif; ?>

  <?php if ($title) : ?>
    <h1 class="text-4xl font-bold text-blue-800">
      <?php echo wp_kses_post($title); ?>
    </h1>
  <?php endif; ?>

  <?php if ($text) : ?>
    <p class="text-2xl text-green-600">
      <?php echo wp_kses_post($text); ?>
    </p>
  <?php endif; ?>
</section>