<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'AleFx~*rZ1}kav]<r$x?N8nE)TnQ4z{jJ(oH8]~d}Y028[$d>!X0{XrvLY16![!*' );
define( 'SECURE_AUTH_KEY',  'b4V(5YLG!q8^+~>yZglaytU(3ZCo>M2[ECqF:1MV1p@S{Pq5.6>-5-8sy#|@m&;g' );
define( 'LOGGED_IN_KEY',    '@p-7T8.Y1[)S-DDpf:x#3zSt6-Tqa_Cxp.&#JFkU0Fu1V2V:qSv,;u6ICWMhD{>*' );
define( 'NONCE_KEY',        '-`{6?2Sl#W(^CR`d;>?ti^7VUHrXz9aX13]u$ANb|(y9LVpYT){!av}]1]}:dENA' );
define( 'AUTH_SALT',        '^i^+Jc0i%x/,B@2xd)%d#8VWL+^tO1~%X7+dNQ|@+]{b&0Z}U.2nU.&kl>p,DI9)' );
define( 'SECURE_AUTH_SALT', 'Qq&A>e^3K!BAyq7?hE,$EJdZ{GO#j^2D-mu)l}?C|jc/< #@&J{Up80a_VbM[UyS' );
define( 'LOGGED_IN_SALT',   'm+6YWSK`hb~5)E%`m>7]s!qJK9N->3(Do&tS/Wdo`A9R4T/I4lfezNl]Pu`Bphy2' );
define( 'NONCE_SALT',       'qA!]>$}bmj7;dP4PVtbg%qA@Ls|=qUCh&v/zWVW{MloI`Cy3:N5:Etf3NGIt!;}5' );
define('JWT_AUTH_SECRET_KEY', '5?D&ZOQA))P8gf@h(}^^4,NjXMUEbwv0*-1$I04F+_x_/y>N-@y,Z%OL)84{r~re');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
