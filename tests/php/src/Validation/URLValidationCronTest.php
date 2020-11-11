<?php

namespace AmpProject\AmpWP\Tests\Validation;

use AmpProject\AmpWP\BackgroundTask\BackgroundTaskDeactivator;
use AmpProject\AmpWP\BackgroundTask\CronBasedBackgroundTask;
use AmpProject\AmpWP\Infrastructure\Conditional;
use AmpProject\AmpWP\Infrastructure\Registerable;
use AmpProject\AmpWP\Infrastructure\Service;
use AmpProject\AmpWP\Tests\Helpers\ValidationRequestMocking;
use AmpProject\AmpWP\Validation\URLValidationCron;
use WP_UnitTestCase;

/** @coversDefaultClass AmpProject\AmpWP\Validation\URLValidationCron */
final class URLValidationCronTest extends WP_UnitTestCase {
	/**
	 * Test instance
	 *
	 * @var URLValidationCron
	 */
	private $test_instance;

	/**
	 * Setup.
	 *
	 * @inheritdoc
	 */
	public function setUp() {
		parent::setUp();
		$this->test_instance = new URLValidationCron( new BackgroundTaskDeactivator() );
		add_filter( 'pre_http_request', [ ValidationRequestMocking::class, 'get_validate_response' ] );
	}

	/**
	 * @covers ::register()
	 */
	public function test_register() {
		$this->assertInstanceof( CronBasedBackgroundTask::class, $this->test_instance );
		$this->assertInstanceof( URLValidationCron::class, $this->test_instance );
		$this->assertInstanceof( Service::class, $this->test_instance );
		$this->assertInstanceof( Registerable::class, $this->test_instance );
		$this->assertInstanceof( Conditional::class, $this->test_instance );

		$this->test_instance->register();

		$this->assertEquals( 10, has_action( 'admin_init', [ $this->test_instance, 'schedule_event' ] ) );
		$this->assertEquals( 10, has_action( URLValidationCron::BACKGROUND_TASK_NAME, [ $this->test_instance, 'process' ] ) );
	}

	/**
	 * Test validate_urls.
	 *
	 * @covers ::validate_urls()
	 * @covers ::get_url_validation_number_per_type()
	 */
	public function test_validate_urls() {
		$this->factory()->post->create_many( 5 );

		$this->test_instance->validate_urls( false );
		$this->assertCount( 6, ValidationRequestMocking::get_validated_urls() );
	}
}