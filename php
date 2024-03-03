function driveLab_enqueue_scripts() {
    // Registriere das Skript
    wp_register_script('fahrschulkalkulator-js', get_stylesheet_directory_uri() . '/js/fahrschulkalkulator.js', array('jquery'), '1.0', true);

    // Füge das Skript zur Warteschlange hinzu
    wp_enqueue_script('fahrschulkalkulator-js');
}

add_action('wp_enqueue_scripts', 'driveLab_enqueue_scripts');
