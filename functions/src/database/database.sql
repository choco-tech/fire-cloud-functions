DROP TABLE tb_climate
CREATE TABLE tb_climate (
	id SERIAL PRIMARY KEY,
	temperature SMALLINT NOT NULL,
	humidity SMALLINT NOT NULL,
	created_at BIGINT NOT NULL,
	room_id VARCHAR(20) NOT NULL
)

INSERT INTO tb_climate (temperature, humidity, created_at, room_id)
VALUES (26, 64, 1683575326772, 'room1')