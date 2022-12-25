import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("health")
@Controller("api/v1/health")
export class HealthController {
  @ApiResponse({ status: 200, description: "pong should be returned" })
  @Get("ping")
  ping(): string {
    return "pong";
  }
}
